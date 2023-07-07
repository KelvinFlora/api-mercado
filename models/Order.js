import mongoose, { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema({
    clientid: { type: Schema.Types.ObjectId, ref: "clientes"},
    productnumber: [{ type: Schema.Types.Number, ref: "produtos"}],
    amount: { type: Number, required: true}
});

const OrderModel = mongoose.model("pedidos", OrderSchema);

export default OrderModel;
