import express from "express";
import ClientController from "../controller/clientController.js";

const router = express.Router();

router.get ("/clients", ClientController.listClient);

router.get ("/client/:id", ClientController.listClientById);

router.post ("/client/new", ClientController.registerClient);

router.put ("/client/:id", ClientController.updateClient);

router.delete ("/client/:id", ClientController.deleteClient);

export default router;