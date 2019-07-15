const express = require('express');
const todoRouter = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();


const app = express();

//Connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:5000/todos")
mongoose.Promise = global.Promise;

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(dotenv);

//Routes
app.use(todoRouter);

//Error handling middleware
app.use( (err, req, res, next) => {
    res.status(422).send({error: err.message})
})

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})
