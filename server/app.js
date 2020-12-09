require("dotenv").config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require("./models")
const errorHandler = require("./handlers/error")
const authRoutes = require("./routes/auth")


const PORT = process.env.PORT | 3000

app.use(cors())
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)

app.use(function(req, res, next) {
	let error = new Error("Not found!")
	error.status = 400
	next(error)
})

app.use(errorHandler)

app.listen(PORT, function() {
	console.log("Server now running..")
})
