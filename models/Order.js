import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  
});

const OrderModel = mongoose.model("pedidos", OrderSchema);

export default OrderModel;
