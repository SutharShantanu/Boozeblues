const express = require("express");
const {
    getWishlist,
    postWishlist,
    deleteWishlist,
} = require("../Controllers/wishlist.controller");

const wishlistRouter = express.Router();

wishlistRouter.get("/", getWishlist);
wishlistRouter.post("/add", postWishlist);
wishlistRouter.delete("/delete/:prodId", deleteWishlist);

module.exports = { wishlistRouter };
