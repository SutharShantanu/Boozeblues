const mongoose = require("mongoose");

const schema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    prodId: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const wishlistModel = mongoose.model("wishlist", schema);

module.exports = { wishlistModel };
