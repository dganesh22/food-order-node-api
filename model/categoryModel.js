const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    collection: "category",
    timestamps: true
})

module.exports = mongoose.model("Category", CategorySchema)