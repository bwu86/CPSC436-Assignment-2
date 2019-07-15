const express = require('express');
const todoRouter = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path")
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

//Connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tododb')
mongoose.Promise = global.Promise;

app.use(express.static('public'))
app.use(bodyParser.json());

//Routes
app.use(todoRouter);

//Error handling middleware
app.use( (err, req, res, next) => {
    res.status(422).send({error: err.message})
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
