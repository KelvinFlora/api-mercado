import express from "express";
import ClientController from "../controller/clientController.js";

const router = express.Router();

router.get ("/cliente", ClientController.listClient)
router.get ("/cliente/:id", ClientController.listClientById)
router.post ("/cliente", ClientController.registerClient)
router.put ("/cliente/:id", ClientController.updateClient)
router.delete ("/cliente/:id", ClientController.deleteClient)

export default router;