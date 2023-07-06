import express from "express";
import order from "./OrderRoutes.js"
import client from "./clientRoutes.js";
import product from "./productRoutes.js"

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Bem-vindo ao App Market");
  });
  app.use(express.json());
  app.use(order, client, product);
};

export default routes;
