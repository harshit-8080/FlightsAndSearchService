const {cityService} = require("../services/index");

const cityObj= new cityService();

const createCity = async (req, res) => {

    try {
        const city = {
            name:req.body.name
        }
        const result = await cityObj.createCity(city);

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

        const result = await cityObj.getAllCity();

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

        const result = await cityObj.getACity(id);

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

const updateCityName = async (req, res) => {

    try {

        const id = req.params.id;
        const name = req.body.name;

        const result = await cityObj.updateCityName(id,name);

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
    getACity,
    updateCityName
}