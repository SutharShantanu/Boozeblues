const express = require("express");
const { productModel } = require("../Models/product.models");

const getProduct = async (req, res) => {
    let { sort, page, order, category } = req.query;
    const limit = 7;
    const query = {};

    if (category) {
        query.category = { $in: category };
    }

    try {
        let product = await productModel.find(query);
        if (sort === "price" && order === "") {
            product = product.sort((a, b) => a.id - b.id);
        } else if (sort === "price" && order === "asc") {
            product = product.sort((a, b) => a.price - b.price);
        } else if (sort === "price" && order === "desc") {
            product = product.sort((a, b) => b.price - a.price);
        }

        const totalProducts = await productModel.countDocuments(query);
        const totalPages = Math.ceil(totalProducts / limit);
        const currentPage = +page || 1;
        const startIndex = (currentPage - 1) * limit;

        const paginatedProduct = product.slice(startIndex, startIndex + limit);

        res.status(200).send({ product: paginatedProduct, totalPages });
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
};

module.exports = { getProduct };
