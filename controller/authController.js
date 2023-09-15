const { StatusCodes } = require("http-status-codes")
const bcrypt  = require('bcryptjs')
const User = require('../model/userModel')

// register user
const register = async (req,res) => {
    try {
       const { name, email, mobile, password } = req.body
        
       // to validate email
       const extUser = await User.findOne({ email })
            if(extUser)
                return res.status(StatusCodes.BAD_REQUEST).json({ msg: `${email} already exists`})
        
            // to validate mobile
      const extMob = await User.findOne({ mobile })
            if(extMob)
                return res.status(StatusCodes.BAD_REQUEST).json({ msg: `${mobile} already exists`})


      // encrypt the pass word
      const encPass = await bcrypt.hash(password,10)

         let newUser = await User.create({
            name,
            email,
            mobile,
            password: encPass
         })

       res.status(StatusCodes.OK).json({  msg: "New user Registered succesfully", newUser })

    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// login user
const login = async (req,res) => {
    try {
        res.json({ msg: "login"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// logout user
const logout = async (req,res) => {
    try {
        res.json({ msg: "logout"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// get login token
const getToken = async (req,res) => {
    try {
        res.json({ msg: "get token"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// get current logged user info
const getCurrentUser = async (req,res) => {
    try {
        res.json({ msg: "get current user"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { register, login, logout, getToken, getCurrentUser }