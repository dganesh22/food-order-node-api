const orderRoute = require('express').Router()
const { add, readAll, readSingle, updateOrder, deleteOrder } = require('../controller/orderController')

orderRoute.post(`/add`, add)
orderRoute.get(`/all`, readAll)
orderRoute.get(`/single/:id`, readSingle)
orderRoute.patch(`/update/:id`, updateOrder)
orderRoute.delete(`/delete/:id`, deleteOrder)

module.exports = orderRoute