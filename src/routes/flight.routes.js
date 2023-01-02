const express = require("express");
const flightController = require("../controllers/flight.controller");

const flightRouter = express.Router();


flightRouter.post("/", flightController.createFlight);

flightRouter.get("/:flightId", flightController.getFlight);

flightRouter.get("/all/flights", flightController.getAllFlights);

flightRouter.post("/fliter/flights", flightController.getFlightsByFliter);

flightRouter.patch("/:flightId", flightController.updateFlight);

module.exports = flightRouter;