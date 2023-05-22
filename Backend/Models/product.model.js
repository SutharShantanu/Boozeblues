const mongoose = require("mongoose");

const schema = mongoose.Schema({
    image: String,
    title: String,
    category: String,
    quantity: String,
    price: Number,
});

const productModel = mongoose.model("products", schema);

module.exports = { productModel };
