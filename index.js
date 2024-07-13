const bodyParser = require('body-parser')
const express = require('express')
const router = require('./src/routes/routes.js')

const app = express()
const port = 3000

function initServer() {
    app.use(express.json())
    app.use(bodyParser.json())
    app.use(router)
    app.listen(port)

    console.log('Im live')
}

initServer()