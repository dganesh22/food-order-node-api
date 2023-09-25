const foodRoute = require('express').Router()
const { create, readAll, readSingle, update, delFood } = require('../controller/foodController')

foodRoute.post(`/add`, create)
foodRoute.get(`/all`, readAll)
foodRoute.get(`/single/:id`, readSingle)
foodRoute.patch(`/update/:id`, update)
foodRoute.delete(`/delete/:id`, delFood)

module.exports = foodRoute          