const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Custom modules
const { mongoDBClient } = require('./utils/mongo.js')
const { router } = require('./utils/router.js')

const PORT = 3000

app.use(bodyParser.json())

app.use(router)

app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:${PORT}`)
})