const express = require('express');
const app = express();
const mongoose = require('mongoose');
var routes = require('./routes/index');
require('dotenv').config()

async function connect() {

    try {

        await mongoose.connect(process.env.MONGODB_URL)

        console.log('connected to db')

    } catch (err) {

        console.error(err)
    }
}

app.use(express.json())

connect()

app.use(`/`, routes)

app.listen(27017, () => {

    console.log('server started')

});


// const db = mongoose.connection

// db.on(`error`,error => console.log(error))
// db.once(`open`,()=> console.log(`connected to db`))