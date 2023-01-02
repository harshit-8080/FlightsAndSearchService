const express = require("express");
const flightController = require("../controllers/flight.controller");

const flightRouter = express.Router();


flightRouter.post("/", flightController.test);


module.exports = flightRouter;