const { StatusCodes } = require('http-status-codes')
const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const authMiddleware = async (req,res,next) => {
        try {
            // read token through headers
            const token = req.header('Authorization')

            // validate token
            await jwt.verify(token, process.env.API_SECRET, (err,user) => {
                if(err)
                    return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Invalid Credentials or Token Expired"})

                req.user = user.id // req.user => creating new variable and assigning user id

                // res.json({ data: req.user })

                next() // forwards response to next controller
            })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
}

module.exports = authMiddleware