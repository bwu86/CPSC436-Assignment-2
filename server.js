const express = require('express');
const todoRouter = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Connect to mongoDB
mongoose.connect('mongodb://localhost/tododb')
mongoose.Promise = global.Promise;

app.use(express.static('public'))
app.use(bodyParser.json());

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
