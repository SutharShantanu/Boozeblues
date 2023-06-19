const express = require("express");
const { cartModel } = require("../Models/cart.model");

////////////////GET///////////////////////////

const getCart = async (req, res) => {
    const { userId } = req.body;
    try {
        const data = await cartModel.find();
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
};

////////////////POST///////////////////////////

const postCart = async (req, res) => {
    const { userId, prodId, title, image, category, quantity, price } =
        req.body;
    try {
        const firstCheck = await cartModel.findOne({
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
                const newData = new cartModel(req.body);
                await newData.save();
                res.status(200).send({
                    msg: "Product has been added to Cart",
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

// ////////////////DELETE///////////////////////////

const deleteCart = async (req, res) => {
    const { prodId } = req.params;

    try {
        await cartModel.findByIdAndDelete(prodId);
        res.status(200).send({ msg: "Product deleted", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
};

module.exports = {
    getCart,
    postCart,
    deleteCart,
};
