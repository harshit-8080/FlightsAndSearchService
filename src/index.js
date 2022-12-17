const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/serverConfig.js");

const cityRouter = require("./routes/city.routes");


const setUpAndStartServer = async() => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(cityRouter);
    
    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
    })
}

setUpAndStartServer();