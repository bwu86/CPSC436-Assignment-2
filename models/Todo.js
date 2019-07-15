const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    // id: {
    //     type: String,
    //     required:[true, "An ID is required"]
    // },
    title: {
        type: String,
        required:[true, 'A title is required']
    },
    completed: {
        type: Boolean,
        required:[true]
    },
    time: {
        type: Date,
        required:[false]
    }
})

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;