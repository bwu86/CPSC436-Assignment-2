const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo')

//Get a list of todos
router.get('/todos', (req, res, next) => {
    Todo.find({}).then((todos) => {
        res.send(todos)
    })
});

//Add a new todo to the database
router.post('/todos', (req, res, next) => {
    Todo.create(req.body).then((todo) => {
        res.send(todo);
    }).catch(next);
});

//Update a todo in the database
router.put('/todos/:id', (req, res, next) => {
    Todo.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Todo.findOne({_id: req.params.id}).then((todo) => {
            res.send(todo)
        })
    })
});

//Delete a todo in the database
router.delete('/todos/:id', (req, res, next) => {
    Todo.findByIdAndRemove({_id: req.params.id}).then((todo) => {
        res.send(todo)
    })
});

router.delete('/todos', async function(req, res, next) {
    try {
        let result = await Todo.deleteMany( {} );
        res.status(200).send(result);
    } catch (e) {
        next(e)
    }
})

module.exports = router