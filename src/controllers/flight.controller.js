const flightService = require("../services/flight.service");
const { v4: uuidv4 } = require('uuid');
const {airplane} = require("../models/index");
const {compareTime} = require("../utils/compareTime");
const flightObj = new flightService();

exports.createFlight = async(req, res) => {
    
    try {
        
        const plane = await airplane.findByPk(req.body.airplaneId);
        // console.log(plane);
        const flight = {

            flightNumber:uuidv4(),
            ariplaneId:plane.id,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:"",
            totalSeats:plane.capacity
            
        }
        

       const checkTime = compareTime(flight.departureTime,flight.arrivalTime);

        if(!checkTime){
            return res.json({
                "msg":"invalid departure and arrival time"
            })
        }
       const response = await flightObj.createFlight(flight);
       return res.status(201).json({

            data:response,
            sucess:true,
            message:"Flight Created Sucessfully",
            err:{}

        })
        
    } catch (error) {
        console.log("Error = ",error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }
}

exports.getFlight = async (req, res) => {

    try {
        
       const flight = await flightObj.getFlightByID(req.params.flightId);

       return res.status(201).json({

            data:flight,
            sucess:true,
            message:"Flight fetched Sucessfully",
            err:{}

        })
        
    } catch (error) {
        console.log("Error = ",error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }
}

exports.getAllFlights = async (req, res) => {

    try {
        
       const flights = await flightObj.getAllFlights();

       return res.status(201).json({

            data:flights,
            sucess:true,
            message:"Flights fetched Sucessfully",
            err:{}

        })
        
    } catch (error) {
        console.log("Error = ",error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }
}

exports.getFlightsByFliter = async (req, res) => {

    try {
        
       const flights = await flightObj.getFlightsByFliter(req.body);

       return res.status(201).json({

            data:flights,
            sucess:true,
            message:"Flights fetched Sucessfully",
            err:{}

        })
        
    } catch (error) {
        console.log("Error = ",error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }
}

exports.updateFlight = async (req, res) => {

    try {
        
        console.log(req.body);
        
        const response = await flightObj.updateFlight(req.params.flightId, req.body);
 
        return res.status(201).json({
 
             data:response,
             sucess:true,
             message:"Flight seat updated Sucessfully",
             err:{}
 
         })
         
     } catch (error) {
         console.log("Error = ",error);
         return res.status(500).json({
             "msg":"internal server error"
         })
     }
}