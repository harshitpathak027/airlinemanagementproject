const express = require("express");
require('dotenv').config()
const bodyparser = require("body-parser")

const {PORT} = require('./config/serverconfig')

const setupandstartserver = async() =>{

    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));    

    app.listen(PORT,()=>{
        console.log(`server is started at ${PORT}`)

    })

}

setupandstartserver();