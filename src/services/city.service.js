const {city} = require("../models/index");

class cityService {

    async createCity(cityName){

        try {

            const response = await city.create(cityName);
            return response;

        } catch (error) {

            throw error;
        }

    }

    async getCity(){

        try {

            const response = await city.findAll();
            return response;

        } catch (error) {

            throw error;
        }

    }
}

module.exports = cityService;