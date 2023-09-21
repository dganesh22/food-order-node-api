const User = require('../model/userModel')
const {StatusCodes} = require('http-status-codes')

// to read all users info except admin
const getAllUsers = async (req,res) => {
    try {
        let users = await User.find({})
        let fUsers = users.filter(item => item.role !== "admin")

        res.status(StatusCodes.OK).json({ length: fUsers.length, users: fUsers })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// to change user role
const changeRole = async (req,res) => {
    try {
        let id = req.params.id
         
        let extUser = await User.findById({ _id: id })
            if(!extUser) 
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested id not found`})

        if(req.body.role === extUser.role) 
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: `Role value is same as in db.`})

        await User.findByIdAndUpdate({ _id: id }, { role: req.body.role })

        res.status(StatusCodes.OK).json({ msg: 'User role updated successfully'})

    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// validate the user exists or not
const validateUser = async (req,res) => {
    try {
        let email = req.query.email
        
        let extUser = await User.findOne({ email })

        if(!extUser)
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested ${email} not exists.`})

        res.status(StatusCodes.OK).json({ msg: `Valid user email id` })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}


// update the password
const updatePassword = async (req,res) => {
    try {
        res.json({ msg: 'update password'})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}


module.exports = { getAllUsers, changeRole, validateUser, updatePassword}