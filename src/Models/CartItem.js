
const mongoose = require('mongoose')


const CartItemSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
     
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,

    },

    quantity: {
        type: Number,
        validate: {
            validator: function (v) {
                return v >= 0;
            },
            message: (props) => `${props.value} is not a positive number!`,
        },
        required:true //[true, 'User value required'],
    }

}, {
    timestamps: true,
    versionKey: false

})


const CartItem = mongoose.model('cart', CartItemSchema)

module.exports = CartItem;




















