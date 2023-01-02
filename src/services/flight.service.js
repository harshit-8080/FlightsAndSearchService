const {flights} = require("../models/index");

class flightService {

    async createFlight(data){

        try {
            const flight = await flights.create(data);
            return flight;
        } catch (error) {
            throw {error}
        }
    }

    async getFlightByFlightNumber(flightNumber){

        try {
            const flight = await flights.findOne({
                where:{
                    flightNumber:flightNumber
                }
            });
            return flight;
        } catch (error) {
            throw {error}
        }
    }

    async getAllFlights(){

        try {
            const allFlight = await flights.findAll();
            return allFlight;
        } catch (error) {
            throw {error}
        }
    }
}


module.exports = flightService;