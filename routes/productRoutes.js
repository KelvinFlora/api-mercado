import express from "express";
import ProductController from "../controller/productController.js";

const router = express.Router();

router.get("/products", ProductController.listProduct);

router.get("/product/:id", ProductController.listIdProduct);

router.post("/product/new", ProductController.registerProduct);

router.put("/product/:id", ProductController.updateProduct);

router.delete("/product/:id", ProductController.deleteProduct);

export default router;