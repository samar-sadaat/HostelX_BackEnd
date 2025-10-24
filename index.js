const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongodb = require('./utils/dataBase')
mongodb();

app.use(cors());
app.use(express.json());


const Port = process.env.Port || 4000;

app.listen(Port, ()=>{
    console.log(`Server is Runing ${Port}`)
})