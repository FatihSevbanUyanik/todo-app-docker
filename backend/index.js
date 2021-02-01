const express = require('express')
const DB = require('./model/db')
const Todo = require('./model/todo')
const Keys = require('./keys')
const cors = require('cors')
const app = express()

app.use(express.json({ limit: '10kb' })) 
app.use(cors())

app.get('/api/todo', async (req, res) => {
    const todos = await Todo.findAll();
    res.send({
        status: 200,
        data: {
            todos
        }
    })
})

app.post('/api/todo', async (req, res) => {
    let { todo } = req.body 
    todo = await Todo.create({ todo })

    res.send({
        status: 200,
        data: {
            todo
        }
    })
}) 


DB.sync()

app.listen(Keys.PORT_SERVER, () => {
   console.log(`Server running on Port ${Keys.PORT_SERVER}`)
})
