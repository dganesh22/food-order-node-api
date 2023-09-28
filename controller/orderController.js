const { StatusCodes } = require('http-status-codes')
const Order = require('../model/orderModel')
const { deliveryStatusTemp, orderTemplate } = require('../util/template')
const mailConfig = require('../util/mail_config')


const add = async (req,res) => {
    try {
        let {items, user , amount } = req.body 
         let newOrder = await Order.create(req.body)

         let temp  = orderTemplate(user,items,newOrder,amount)
         let sub = `Hi, ${user.name}, Your New Order Information`;
         let info = await mailConfig(user.email,sub,temp)

        res.status(StatusCodes.OK).json({ msg: "order genereated successfully", order: newOrder, info })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

const readAll = async (req,res) => {
    try {
        let orders = await Order.find()

        res.status(StatusCodes.OK).json({length: orders.length, orders })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

const readSingle = async (req,res) => {
    try {
        let id = req.params.id 
        let single = await Order.findById({ _id: id })
            if(!single)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested order id not found`})

        res.status(StatusCodes.OK).json({ order: single })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

const updateOrder = async (req,res) => {
    try {
        let id = req.params.id
        let { user,payStatus,orderStatus,deliveryStatus } = req.body

        let single = await Order.findById({ _id: id })
            if(!single)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested order id not found`})

           await Order.findByIdAndUpdate({_id: id }, req.body)     

            let temp =  deliveryStatusTemp(user.name,id,payStatus,orderStatus,deliveryStatus)
            let sub = "Order Status";
            let info =  await mailConfig(user.email, sub, temp)
        
           res.status(StatusCodes.OK).json({ msg: "order details updated", info })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

const deleteOrder = async (req,res) => {
    try {
        let id = req.params.id
        let single = await Order.findById({ _id: id })
            if(!single)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested order id not found`})

            await Order.findByIdAndDelete({_id: id })

        res.status(StatusCodes.OK).json({ msg: "order deleted successfully"})
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

module.exports = { add, readAll, readSingle, updateOrder, deleteOrder}