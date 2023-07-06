import express from "express";
import OrderController from "../controller/orderController.js";

const router = express.Router();

router.get("/orders", OrderController.listOrder);

router.get("/order/:id", OrderController.listIdOrder);

router.post("/order/new", OrderController.registerOrder);

router.put("/order/:id", OrderController.updateOrder);

router.delete("/order/:id", OrderController.deleteOrder);

export default router;
