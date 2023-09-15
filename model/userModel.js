const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
    },
    image: {
        type: Object,
        default: {
            url: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg"
        }
    },
    address: {
        type: Object,
        default: {
            line1: "test",
            line2: "test",
            landmark: "test",
            city: "Test City",
            pincode: "123456"
        }
    },
    qualification: {
        type: Object,
        default: {
            ssc: "test",
            inter: "test",
            degree: [],
            master: [],
            pg: [],
            doc: []
        }
    },
    role: {
        type: String,
        default: "user",
        enum: ["admin","user","vender"]
    },
    wishlist: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model("User", UserSchema)