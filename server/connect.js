const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://mughilank:mkmessi1097@mk.ogghjf3.mongodb.net/Node-API?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
}

module.exports = connectDB
