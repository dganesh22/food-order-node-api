const mongoose = require('mongoose')
const orderSchema  = new mongoose.Schema({
      items: {
        type: Array,
        required: true,
        default: []
      },
      user: {
        type: Object,
        required: true,
        default: {}
      },
      orderTime: {
        type: Date,
        default: new Date().toLocaleString()
      },
      amount: {
        type: Number,
        required: true
      },
      payMode: {
        type: String,
        enum: ["cash","card","upi"],
        default: "cash"
      },
      payStatus: {
        type: String,
        enum: ["paid", "unpaid"],
        default: "unpaid"
      },
      orderStatus: {
        type: String,
        enum: ["pending","received","processing","completed"],
        default: "pending"
      },
      deliveryStatus: {
        type: String,
        enum: ["on-the-way", "delivered","return-requested","returned"],
        default: "on-the-way"
      },
      deliveryTime: {
        type: Date,
        default: new Date().toLocaleString()
      }
},{
    collection: "orders",
    timestamps: true
})

module.exports  = mongoose.model("Order", orderSchema)