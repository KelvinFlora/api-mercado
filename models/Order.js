import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    amount: { type: Number, required: true}
});

const OrderModel = mongoose.model("pedidos", OrderSchema);

export default OrderModel;
