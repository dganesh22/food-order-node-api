const mongoose = require('mongoose')
const FoodSchema = new mongoose.Schema({
    title: {
        type: String,
        trim:true,
        required:true
    },
    desc: {
        type: String,
        trim:true,
        required:true
    },
    image: {
        type: Object,
        required:true,
    },
    price: {
        type: Number,
        required:true
    },
    stock: {
        type: Number,
        required:true
    },
    unit: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    vendor: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    collection: "foods",
    timestamps: true
})

module.exports = mongoose.model("Food", FoodSchema)