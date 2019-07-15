const express = require('express');
const todoRouter = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");
require("dotenv").config();

const PORT = process.env.MONGODB_URI || 5000;

const app = express();

//Connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://bwu86:benbenben10@ds123645.mlab.com:23645/heroku_pc3tspq0")
mongoose.Promise = global.Promise;

app.use(express.static('public'))
app.use(bodyParser.json());

//Routes
app.use(todoRouter);

//Error handling middleware
app.use( (err, req, res, next) => {
    res.status(422).send({error: err.message})
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "build", "index.html"));
});


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})
