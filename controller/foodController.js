const Food = require('../model/foodModel')
const { StatusCodes } = require('http-status-codes')

const create = async (req,res) => {
    try {
        let vId = req.body.vendor

        let foods = await Food.find()
        let sortFoods = foods.filter(item => item.vendor === vId)

         await Food.create(req.body)
            res.status(StatusCodes.CREATED).json({ msg: "New Food details created"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

const readAll = async (req,res) => {
    try {
        let data = await Food.find()

        res.status(StatusCodes.OK).json({ length: data.length, foods: data })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

const readSingle = async (req,res) => {
    try {
        let id = req.params.id 
        
        let extData = await Food.findById({_id: id })
            if(!extData)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested id not found`})

        res.status(StatusCodes.OK).json({ food: extData })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

const update = async (req,res) => {
    try {
        let id = req.params.id

        let extData = await Food.findById({ _id: id })
        if(!extData)
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested id not found`})
        
         await Food.findByIdAndUpdate({_id: id }, req.body)

        res.status(StatusCodes.OK).json({ msg: 'food details updated'})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

const delFood = async (req,res) => {
    try {
        let id = req.params.id 
        let extData = await Food.findById({ _id: id })
        if(!extData)
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested id not found`})

        await Food.findByIdAndDelete({_id: id })

        res.status(StatusCodes.OK).json({ msg: 'Food details deleted'})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

module.exports = { create, readAll, readSingle, update, delFood }