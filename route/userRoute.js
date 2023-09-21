const userRoute = require('express').Router()
const { getAllUsers, changeRole, validateUser, updatePassword} = require('../controller/userController')

// read all users data => except admin
userRoute.get(`/all`, getAllUsers)

// send user id as params
userRoute.patch(`/change/role/:id`, changeRole)

// validate user email => send email as query
userRoute.get(`/validate/user`, validateUser)

// update the password => send token as query
userRoute.patch(`/update/password`, updatePassword)


module.exports = userRoute