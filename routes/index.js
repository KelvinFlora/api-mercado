import express from "express";
import parking from "./parkingRoutes.js";
import client from "./clientRoutes.js"

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Bem-vindo ao App Parking");
  });
  app.use(express.json());
  app.use(parking, client);
};

export default routes;
