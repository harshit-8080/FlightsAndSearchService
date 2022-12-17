const {city} = require("../models/index");
const { Op } = require("sequelize");

class cityService {

    async createCity(cityName){

        try {

            const response = await city.create(cityName);
            return response;

        } catch (error) {

            throw error;
        }

    }

    async getAllCity(){

        try {

            const response = await city.findAll();
            return response;

        } catch (error) {

            throw error;
        }

    }

    async getACity(id){

        try {

            const response = await city.findByPk(id);
            return response;

        } catch (error) {

            throw error;
        }

    }

    async updateCityName(id,name){

        try {

            const response = await city.findByPk(id);
            response.name = name;

            await response.save();
            
            return response;

        } catch (error) {

            throw error;
        }

    }

    async searchCites(filter){

        try {

            const response = await city.findAll({
                where:{
                    name:{
                        [Op.like]: `${filter}%`
                    }
                }
            })

            return response;

        } catch (error) {

            return error;
        }

    }


}

module.exports = cityService;