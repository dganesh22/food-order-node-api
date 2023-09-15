const express = require('express')
require('dotenv').config()

const cors = require('cors')
const cookieParser = require('cookie-parser')
const { StatusCodes } = require("http-status-codes")

const connectDb = require('./db/connect')
const PORT = process.env.PORT

const app = express()

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())
app.use(cookieParser())

// api routes
app.use(`/api/auth`, require('./route/authRoute'))

// default route
app.all(`/**`, async (req,res) => {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested Path Not found`})
})

// default port
app.listen(PORT, () => {
    connectDb()
    console.log(`server is started, and running @ http://localhost:${PORT}`)
})