const { register, login, logout, getToken, getCurrentUser } = require('../controller/authController')
const authRoute = require('express').Router()
const authMiddleware = require('../middleware/auth_middleware')

authRoute.post(`/register`, register)
authRoute.post(`/login`, login)
authRoute.get(`/logout`, logout)

authRoute.get(`/get/token`, getToken)
authRoute.get(`/get/current/user`, authMiddleware, getCurrentUser)


module.exports = authRoute