const mongoose = require("mongoose");

const schema = mongoose.Schema({
    userId: String,
    // prodId: String,
    image: String,
    title: String,
    category: String,
    quantity: Number,
    price: Number,
});

const wishlistModel = mongoose.model("wishlist", schema);

module.exports = { wishlistModel };
