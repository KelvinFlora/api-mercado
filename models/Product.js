import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema ({
    name: { type: String, required: true},
    price: { type: Number, required: true}
})

const ProductModel = mongoose.model ("produtos", ProductSchema);

export default ProductModel;