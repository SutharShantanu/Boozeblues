const express = require("express");
const {
    getWishlist,
    postWishlist,
    deleteWishlist,
} = require("../Controllers/wishlist.controller");

const wishlistRouter = express.Router();

wishlistRouter.get("/", getWishlist);
wishlistRouter.post("/add", postWishlist);
wishlistRouter.get("/delete/:id", deleteWishlist);

module.exports = { wishlistRouter };
