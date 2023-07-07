import OrderModel from "../models/Order.js";

class OrderController {
  static listOrder = async (req, res) => {
    try {
      const result = await OrderModel.find().populate("productnumber").exec();
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
    try {
      const result = await OrderModel.create(data);
      if (result) {
        res.status(201).json(result);
      } else {
        res
          .status(400)
          .json({ message: "Não foi possível registrar o pedido!" });
      }
    } catch (error) {
      res.status(500).json({
        message: "Erro interno do servidor."
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

  static deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await OrderModel.deleteOne({ _id: id });
      if (result.deletedCount > 0) {
        res.status(200).json({ message: "Pedido removido com sucesso!"});
      } else {
        res
          .status(404)
          .json({ message: "Não foi possível excluir o pedido!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  };
}

export default OrderController;
