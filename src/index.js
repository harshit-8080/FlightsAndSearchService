const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/serverConfig.js");

const cityRouter = require("./routes/city.routes");
const {airport,city} = require("./models/index");

const setUpAndStartServer = async() => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/api/v1.0",cityRouter);
    
    app.listen(PORT, async() => {
        console.log(`Server started at ${PORT}`);

        // TODD -> Remove all below codes

            // const a1 = await airport.findAll({
            //     attributes:['id','name','address'],
            //     // include:['city']
            //     include:{
            //         model:city,
            //         attributes:['id','name']
            //     }
            // });

            // console.log("printing airports => ",JSON.stringify(a1,null,3));

        // TODD -> Remove below checks Examples for (LAZY LOADING FUNCTIONS)

            // const c1 = await city.findAll({
            //     where:{
            //         id:1
            //     },
            //     include:[airport]
            // });

            // console.log("printing aiports of delhi => ",JSON.stringify(c1,null,3));


            // const c2 = await city.findOne({
            //     where:{
            //         id:1
            //     }
            // })
            // const airports = await c2.getAirports();
            // console.log("Printing aiports of delhi => ",JSON.stringify(airports,null,3));

        // Created a airport with diff cityID(10) as c2(5)

            // const a2 = await airport.create({
            //     name:'terminal 5',
            //     cityID:10                
            // })
        
        // now Get The airport which we want to associated with city as c2

            // const a2 = await airport.findOne({
            //     where:{
            //         city:10
            //     }
            // })

        // then Here we can associated airports(a2) to this city (c2)
        
            // await c2.addAirport(a2);   



    })
}

setUpAndStartServer();