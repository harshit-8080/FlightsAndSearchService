const express = require("express");
const cityController = require("../controllers/city.controller");

const cityRouter = express.Router();


cityRouter.post("/cities", cityController.createCity);

cityRouter.get("/cities", cityController.getCity);

module.exports = cityRouter;