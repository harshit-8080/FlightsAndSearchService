const {cityService} = require("../services/index");

const cityObj= new cityService();

const createCity = async (req, res) => {

    try {
        const city = {
            name:req.body.name
        }
        const result = await cityObj.createCity(city);

        return res.status(201).json({

            data:result,
            sucess:true,
            message:"City Created Sucessfully",
            err:{}

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

            data:result,
            sucess:true,
            message:"Successfully fetched all cities",
            err:{}
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

            data:result,
            sucess:true,
            message:"Successfully fetched a city",
            err:{}
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

            data:result,
            sucess:true,
            message:"Successfully updated City Name",
            err:{}
        })

    } catch (error) {
        console.log("Error = ",error);
        return res.status(500).json({
            "msg":"internal server error"
        })
    }

}

const searchCity = async (req,res) =>{

    try {

        const filter = req.query.search;

        const result = await cityObj.searchCites(filter);

        return res.status(201).json({

            data:result,
            sucess:true,
            message:"Successfully searched Cities",
            err:{}
        })

    } catch (error) {
        console.log("Error = ",error);
        return res.status(500).json({
            "msg":"internal server error",
            err:{error}
        })
    }

}

module.exports = {
    createCity,
    getAllCity,
    getACity,
    updateCityName,
    searchCity
}