import mongoose from "mongoose";

const ClientInfo = new mongoose.Schema ({
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    adress: {type: String, required: true}
})

const ClientData = mongoose.model("clientes", ClientInfo )

export default ClientData