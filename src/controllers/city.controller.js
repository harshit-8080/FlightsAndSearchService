const city = require("../services/city.service");

const cityService = new city();

const createCity = async (req, res) => {

    try {
        const city = {
            name:req.body.name
        }
        const result = await cityService.createCity(city);

        return res.status(201).json({
            "msg":result
        })

    } catch (error) {
        console.log("Error = ",error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }
}

const getAllCity = async (req, res) => {

    try {

        const result = await cityService.getAllCity();

        return res.status(201).json({
            "msg":result
        })

    } catch (error) {
        console.log("Error = ",error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }

}

const getACity = async (req, res) => {

    try {

        const id = req.params.id;

        const result = await cityService.getACity(id);

        return res.status(201).json({
            "msg":result
        })

    } catch (error) {
        console.log("Error = ",error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }

}

module.exports = {
    createCity,
    getAllCity,
    getACity
}