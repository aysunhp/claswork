const express = require('express')
require('dotenv').config()
require("./src/config/db")
const bodyParser = require('body-parser')

// const dbConnect = require("./src/config/db")
// dbConnect()
const app = express()
const userRouter = require("./src/routers/userRouter")
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use("/", userRouter);




// app.get('/', (req, res) => {
//     res.send(' Users')
// })

// // get all users
// app.get('/users', (req, res) => {
//     res.send(arr)
// })

// // get by id
// app.get('/users/:id', (req, res) => {
//     let elementById = arr.find(item => item.id == req.params.id)
//     res.send(elementById)
// })

// // delete 
// app.delete('/users/:id', (req, res) => {
//     arr = arr.filter(item => item.id != req.params.id)
//     res.send(arr)
// })

// // post 
// app.post('/users', (req, res) => {
//     arr.push(req.body)
//     res.send(arr)
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})