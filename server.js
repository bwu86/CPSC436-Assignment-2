const express = require('express');
const todoRouter = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path")

require("dotenv").config();

const app = express();

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

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
