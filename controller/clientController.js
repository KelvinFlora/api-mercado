import ClientModel from "../models/Client.js";

class ClientController {
    static listClient = async (req, res) => {
        try{
        const result = await ClientModel.find()
        if (result.length > 0) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ message: "A lista de clientes não foi encontrada."})
        }
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor!"})
    }};

    static listClientById = async (req, res) => {
        const id = req.params.id;
        try {
            const result = await ClientModel.findById(id)
            if (result) {
                res.status(200).json(result)
            } else {
                res.status(404).json({ message: "Não foi possível encontrar o cliente solicitado! Confira os dados e tente novamente."})
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor!"})
        }
    }

    static registerClient = async (req, res) => {
        const data = req.body
        try {
            const result = await ClientModel.create(data)
            if (result) {
                res.status(201).json(result);
            } else{
                res.status(400).json({ message: "Não foi possível registrar o novo cliente!"})
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor!"})
        }
    }

    static updateClient = async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const result = await ClientModel.updateOne( {_id: id}, data)
            if (result) {
                res.status(201).json({ message: "As alterações foram realizadas com sucesso!"})
            } else {
                res.status(400).json({ message: "Não foi possível realizar as alterações!"})
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor!"})
        }
    }

    static deleteClient = async (req, res) => {
        const id = req.params.id;
        try {
            const result = await ClientModel.deleteOne({_id: id});
            if (result.deletedCount > 0) {
                res.status(201).json({ message: "As informações do cliente foram apagadas com sucesso!"})
            } else {
                res.status(400).json({ message: "Não foi possível apagar as informações do cliente!"})
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor!"})
        }
    }
}

export default ClientController;