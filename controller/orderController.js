import OrderModel from "../models/Order.js";

class OrderController {
  static listOrder = async (req, res) => {
    try {
      const result = await OrderModel.find();
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message:
            "Não foi possível encontrar a lista de pedidos!",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor!" });
    }
  };

  static listIdOrder = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await OrderModel.findById(id);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Pedido não encontrado!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  };

  static registerOrder = async (req, res) => {
    const data = req.body;
  
    const entry = new Date();
    try {
      data.entrytime = entry;
      const result = await OrderModel.create(data);
      if (result) {
        res.status(201).json(result);
      } else {
        res
          .status(400)
          .json({ message: "Não foi possível registrar a entrada!" });
      }
    } catch (error) {
      res.status(500).json({
        message: "Erro interno do servidor.",
        error: process.env.DEVELOPMENT ? error : undefined,
      });
    }
  };

  static updateOrder = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
      const result = await OrderModel.updateOne({ _id: id }, data);
      if (result) {
        res
          .status(200)
          .json({ message: "A atualização foi realizada com sucesso!" });
      } else {
        res
          .status(404)
          .json({ message: "Não foi possível atualizar as informações!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor!" });
    }
  };

  static updateOrderExit = async (req, res) => {
    const id = req.params.id;
    const parkingEntry = await OrderModel.findById(id);
    const entry = parkingEntry.entrytime;
    try {
      const price = 0.16;
      const exit = new Date();
      const timeDiff = exit.getTime() - entry.getTime();
      const payment = (timeDiff / 60000) * price;
      const resultExit = await OrderModel.findByIdAndUpdate(
        id,
        { exittime: exit, totalPrice: payment },
        { new: true }
      );

      if (resultExit) {
        res.status(200).json({
          message: `O valor a ser pago é de: ${payment} reais.`,
        });
      } else {
        res
          .status(404)
          .json({ message: "Não foi possível atualizar as informações!" });
      }
    } catch (error) {
      res.status(500).json({ message: `Erro interno do servidor!${error}` });
    }
  };

  static deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await OrderModel.deleteOne({ _id: id });
      if (result.deletedCount > 0) {
        res.status(200).json(result);
      } else {
        res
          .status(404)
          .json({ message: "Não foi possível excluir a informação!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  };
}

export default OrderController;
