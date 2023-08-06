const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./connect')
const cors = require('cors')

const app = express()
const users = require('./routes/users')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/users', users)

const start = async () => {
    try {
        await connectDB()
        app.listen(5001, () => {
            console.log('Server is up on port 5001')
        })
    } catch (error) {
        console.log(error)
    }
}

start()
