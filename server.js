const express = require('express');
const app = express();
const mongoose = require('mongoose');
var routes = require('./routes/index');
require('dotenv').config()

async function connect() {

    try {

        await mongoose.connect("mongodb://ahmedkamel89:a991984@ac-gz7wmdr-shard-00-00.vutj3i6.mongodb.net:27017,ac-gz7wmdr-shard-00-01.vutj3i6.mongodb.net:27017,ac-gz7wmdr-shard-00-02.vutj3i6.mongodb.net:27017/chatApp?ssl=true&replicaSet=atlas-f0kfg4-shard-0&authSource=admin&retryWrites=true&w=majority")

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