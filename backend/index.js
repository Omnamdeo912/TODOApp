const express = require('express');
const app = express()
const {createTodo,updateTodo} = require("./type")
const {todo} = require("./db");
app.use(express.json());
const cors = require("cors")
app.use(cors())

app.post('/todo', (req,res)=>{
    const createPayload= req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(! parsePayload.success){
        res.status(411).json({
            msg:"You sent worong input"
        })
        return
    }
    todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    .then(()=>{
        res.json({
            msg:"Todo created"
        })
    })
    .catch((err)=>{
        res.json({msg:"Something went wrong while creating Todo"})
    })
    })

app.get('/todos', async (req,res)=>{
    const todos = await todo.find({});
    res.json({todos})
})


app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.updateOne({                      // mongoose dont have 'update' methond insted it has 'updateMany' 'updateOne' method
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Todo marked as completed"
    })
})
app.listen(3000) 