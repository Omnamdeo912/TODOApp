const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://op1999namdeo:Omprakash@cluster0.qet9xzd.mongodb.net/todoApp')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed : Boolean
})

const todo = mongoose.model("todos",todoSchema);

module.exports ={
    todo
}