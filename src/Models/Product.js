
const mongoose = require('mongoose')


const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        validate: {
            validator: function (v) {
                return v >= 0;
            },
            message: (props) => `${props.value} is not a positive number!`,
        },
        required:true 
    },
    stock: {
        type: Number,
        validate: {
            validator: function (v) {
                return v >= 0;
            },
            message: (props) => `${props.value} is not a positive number!`,
        },
        required:[true, 'Stock value required'],
    },
    category: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String
    },

}, {
    timestamps: true,
    versionKey: false

})


const Product = mongoose.model('product', ProductSchema)

module.exports = Product;




















