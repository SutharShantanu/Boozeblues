const express = require("express");
const {
    getWishlist,
    postWishlist,
    deleteWishlist,
} = require("../Controllers/wishlist.controller");
const { wishlistModel } = require("../Models/wishlist.model");

const wishlistRouter = express.Router();

wishlistRouter.get("/", getWishlist);
wishlistRouter.post("/add", postWishlist);
wishlistRouter.delete("/delete/:id", deleteWishlist);

module.exports = { wishlistRouter };
