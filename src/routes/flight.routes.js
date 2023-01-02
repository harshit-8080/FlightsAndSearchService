const express = require("express");
const flightController = require("../controllers/flight.controller");

const flightRouter = express.Router();


flightRouter.post("/", flightController.createFlight);

flightRouter.get("/:flightNumber", flightController.getFlight);

flightRouter.get("/all/flights", flightController.getAllFlights);

module.exports = flightRouter;