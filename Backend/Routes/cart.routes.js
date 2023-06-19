const express = require("express");
const {
    getCart,
    postCart,
    deleteCart,
} = require("../Controllers/cart.controller");

const cartRouter = express.Router();

cartRouter.get("/", getCart);
cartRouter.post("/add", postCart);
cartRouter.delete("/delete/:prodId", deleteCart);

module.exports = { cartRouter };
