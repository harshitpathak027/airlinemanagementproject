const express = require("express");
require('dotenv').config()

const {PORT} = require('./config/serverconfig')

const setupandstartserver = async() =>{

    const app = express();

    app.listen(PORT,()=>{
        console.log(`server is started at ${PORT}`)

    })

}

setupandstartserver();