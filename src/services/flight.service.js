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


    async getFlightByID(id){

        try {
            const flight = await flights.findByID(id);
            return flight;
        } catch (error) {
            throw {error}
        }
    }


    async getAllFlights(fight){

        try {
            const flights = await flights.find();
            return flights;
        } catch (error) {
            throw {error}
        }
    }
}


module.exports = flightService;