const { StatusCodes } = require("http-status-codes")
const bcrypt  = require('bcryptjs')
const User = require('../model/userModel')
const mailConfig = require('../util/mail_config')
const {regTemplate, loginConfirm} = require('../util/template')
const { createAccessToken } = require('../util/token')
const jwt = require('jsonwebtoken')

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

      // to save data into db
         let newUser = await User.create({
            name,
            email,
            mobile,
            password: encPass
         })

         // send confirm email
         let template = regTemplate(name,email)
         let subject = "User Registration"
        let emailRes = await mailConfig(email,subject,template)

       res.status(StatusCodes.OK).json({  msg: "New user Registered succesfully", newUser, emailRes })

    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// login user
const login = async (req,res) => {
    try {
        let { email, password } = req.body

        // user exists or not
        let extUser = await User.findOne({ email })
            if(!extUser)
                return res.status(StatusCodes.NOT_FOUND).json({msg: `${email} id not found`})

            // password verfication
            let isMatch = await bcrypt.compare(password,extUser.password)
                if(!isMatch)
                    return res.status(StatusCodes.NOT_ACCEPTABLE).json({ msg: "Passwords are not matched"})

                // login token
            const authToken = createAccessToken({ id: extUser._id })


                  // send confirm email
            let template = loginConfirm(extUser.name,email)
            let subject = "User Login"
            let emailRes = await mailConfig(email,subject,template)

            // cookies for session management
            res.cookie('loginToken', authToken, {
                httpOnly: true,
                signed: true,
                path: `/api/auth/get/token`,
                maxAge: 1 * 24 * 60 * 60 * 1000
            })
        
            res.status(StatusCodes.OK).json({ msg: "Login Successful", authToken })

    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// logout user
const logout = async (req,res) => {
    try {
        res.clearCookie('loginToken', { path: `/api/auth/get/token`})

        res.status(StatusCodes.OK).json({ msg: `Logout Successful`})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// get login token
const getToken = async (req,res) => {
    try {
        // validate the logintoken 
        const rToken = req.signedCookies.loginToken

        if(!rToken) 
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `Token not available, Login Again..`})

        // valid user id or not
        await jwt.verify(rToken, process.env.API_SECRET, (err,user) => {
            if(err)
                return res.status(StatusCodes.UNAUTHORIZED).json({ msg: `Invalid Token or Expired..,Login again..`})

            // valid
            res.status(StatusCodes.OK).json({ authToken: rToken })
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// get current logged user info
const getCurrentUser = async (req,res) => {
    try {
        let userId = req.user

        let user = await User.findById({ _id: userId }).select("-password")
            if(!user)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `User id not found`})

        res.status(StatusCodes.OK).json({  user })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { register, login, logout, getToken, getCurrentUser }