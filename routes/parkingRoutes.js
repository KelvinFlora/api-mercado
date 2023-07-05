import express from "express";
import EntryController from "../controller/parkingController.js";

const router = express.Router();

router.get("/estacionamento", EntryController.listEntry);

router.get("/estacionamento/:id", EntryController.listIdEntry);

router.post("/estacionamento", EntryController.registerEntry);

router.put("/estacionamento/entrada/:id")

router.put("/estacionamento/saida/:id", EntryController.updateExit);

router.put("/estacionamento/:id", EntryController.updateEntry);

router.delete("/estacionamento/:id", EntryController.deleteEntry);

export default router;
