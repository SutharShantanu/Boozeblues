const express = require("express");
const { wishlistModel } = require("../Models/wishlist.model");

////////////////GET///////////////////////////

const getWishlist = async (req, res) => {
    const { userId } = req.body;
    try {
        const data = await wishlistModel.find(); // { userId } only apply after middleware unless dont write it
        // console.log("Wishlist data:", data);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
};

////////////////POST///////////////////////////

const postWishlist = async (req, res) => {
    const { prodId, userId, title, image, category, quantity, price } =
        req.body;
    try {
        const firstCheck = await wishlistModel.findOne({
            prodId,
            userId,
        });

        if (!firstCheck) {
            if (
                prodId &&
                userId &&
                title &&
                image &&
                category &&
                quantity &&
                price
            ) {
                const newData = new wishlistModel(req.body);
                await newData.save();
                res.status(200).send({
                    msg: "Product has been added to wishlist",
                    status: "success",
                });
            } else {
                res.status(400).send({ msg: "Invalid format" });
            }
        } else {
            res.status(400).send({ msg: "Product already present" });
        }
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
};

////////////////DELETE///////////////////////////

const deleteWishlist = async (req, res) => {
    try {
        await wishlistModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ msg: "Product deleted", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
};

module.exports = { getWishlist, postWishlist, deleteWishlist };
