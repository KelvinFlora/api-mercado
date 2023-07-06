import express from "express";
import ProductController from "../controller/productController.js";

const router = express.Router();

router.get("/products", ProductController.);

router.get("/products/:id", ProductController.);

router.put("/products/:id", ProductController.);

router.post("/products/new", ProductController.);

router.delete("/products/:id", ProductController.);

export default router;