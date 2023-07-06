import express from "express";
import ProductController from "../controller/productController.js";

const router = express.Router();

router.get("/products", ProductController.listProduct);

router.get("/products/:id", ProductController.listIdProduct);

router.post("/products/new", ProductController.registerProduct);

router.put("/products/:id", ProductController.updateProduct);

router.delete("/products/:id", ProductController.deleteProduct);

export default router;