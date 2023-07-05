import ParkingEntrance from "../models/Parking.js";

class EntryController {
  static listEntry = async (req, res) => {
    try {
      const result = await ParkingEntrance.find();
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message:
            "Não foi possível encontrar a lista de entrada no estacionamento!",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor!" });
    }
  };

  static listIdEntry = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await ParkingEntrance.findById(id);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "ID de entrada não encontrado!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  };

  static registerEntry = async (req, res) => {
    const data = req.body;
  
    const entry = new Date();
    try {
      data.entrytime = entry;
      const result = await ParkingEntrance.create(data);
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

  static updateEntry = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
      const result = await ParkingEntrance.updateOne({ _id: id }, data);
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

  static updateExit = async (req, res) => {
    const id = req.params.id;
    const parkingEntry = await ParkingEntrance.findById(id);
    const entry = parkingEntry.entrytime;
    try {
      const price = 0.16;
      const exit = new Date();
      const timeDiff = exit.getTime() - entry.getTime();
      const payment = (timeDiff / 60000) * price;
      const resultExit = await ParkingEntrance.findByIdAndUpdate(
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

  static deleteEntry = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await ParkingEntrance.deleteOne({ _id: id });
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

export default EntryController;
