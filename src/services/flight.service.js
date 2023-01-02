const {flights} = require("../models/index");
const {Op} = require("sequelize")
class flightService {

    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.minPrice && data.maxPrice) {
            Object.assign(filter, {
                [Op.and]: [
                    { price: {[Op.lte]: data.maxPrice} }, 
                    { price: {[Op.gte]: data.minPrice} }
                ]
            })
        }
 
        return filter;
    }
    
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
            const flight = await flights.findByPk(id);
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

    async getFlightsByFliter(data){

        try {
            const fliter = this.#createFilter(data);

            const allFlight = await flights.findAll({
                where:fliter
            });

            return allFlight;
        } catch (error) {
            throw {error}
        }
    }
}


module.exports = flightService;