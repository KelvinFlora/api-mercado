import ProductModel from "../models/Product.js";

class ProductController {
    static listProduct = async (req, res) => {
        try{
            const result = await ProductModel.find();
         if (result.length > 0) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ message: "Não foi possível encontrar a lista de produtos!"})
        }
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor!"})
    }
}

    static listIdProduct = async (req, res) => {
        const id = req.params.id;
        try {
            const result = await ProductModel.findById(id);
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ message: "Não foi possível encontrar o produto!"})
        }
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor!"})
    }
    }

    static registerProduct = async (req, res) => {
        const data = req.body;
        try {
            const result = await ProductModel.create(data);
            if (result) {
                res.status(201).json({ message: "Produto registrado com sucesso!"})
            } else {
                res.status(400).json({ message: "Não foi possível registrar o produto!"})
            }
        } catch(error) {
            res.status(500).json({ message: "Erro interno do servidor!"})
        }
    }

    static updateProduct = async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const result = await ProductModel.updateOne({_id: id}, data);
            if (result) {
                res.status(201).json({ message: "As informações do produto foram atualizadas!"})
            } else {
                res.status(400).json({ message: "Não foi possível realizar as alterações no produto!"})
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor!"})
        }
    }

    static deleteProduct = async (req, res) => {
        const id = req.params.id;
        try {
            const result = await ProductModel.deleteOne({_id: id});
            if (result.deletedCount > 0) {
                res.status(201).json({ message: "O produto foi removido com sucesso!"})
            } else {
                res.status(400).json({ message: "Não foi possível remover o produto!"})
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno do servidor!"})
        }
    }
}

export default ProductController;