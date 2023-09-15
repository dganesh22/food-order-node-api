const jwt = require('jsonwebtoken')

// to generate login auth token
const createAccessToken = (user) => {
    return jwt.sign(user, process.env.API_SECRET, { expiresIn: '1d'})
}

module.exports = { createAccessToken }