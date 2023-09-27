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
app.use(cookieParser(process.env.API_SECRET))  // without secret -> unsigned cookies, with scret -> signed cookies

// index (home) route
app.use(`/`, async (req,res) => {
    res.status(StatusCodes.OK).json({ msg: "Welcome to Food Order API"})
})

// api routes
app.use(`/api/auth`, require('./route/authRoute'))
app.use(`/api/user`, require('./route/userRoute'))
app.use(`/api/category`, require('./route/categoryRoute'))
app.use(`/api/food`, require('./route/foodRoute'))
app.use(`/api/order`, require('./route/orderRoute'))

// default route - requested path not exists.
app.all(`/**`, async (req,res) => {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested Path Not found`})
})

// default port
app.listen(PORT, () => {
    connectDb()
    console.log(`server is started, and running @ http://localhost:${PORT}`)
})