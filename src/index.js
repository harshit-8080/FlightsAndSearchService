const express = require("express");
const { PORT } = require("./config/serverConfig.js");

const setUpAndStartServer = async() => {

    const app = express();
    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
    })
}

setUpAndStartServer();