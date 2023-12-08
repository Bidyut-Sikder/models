
const mongoose = require('mongoose')


const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,

    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        quantity: Number
    }],
    totalAmount: {
        type: Number,
        validate: {
            validator: function (v) {
                return v >= 0;
            },
            message: (props) => `${props.value} is not a positive number!`,
        },
        required: true //[true, 'Amount value required'],
    },
    shippingAddress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        //enum: ['pending', 'delivered', 'cancelled'],
        default: 'pending'
    }
}, {
    timestamps: true,
    versionKey: false

})


const OrderModel = mongoose.model('order', OrderSchema)

module.exports = OrderModel;




















