const express = require("express");
const { productModel } = require("../Models/product.model");

/**
 * Retrieves a paginated list of products based on the provided query parameters.
 *
 * @param {Object} req - the request object containing the query parameters.
 * @param {Object} res - the response object to return the products.
 * @return {Object} an object containing the paginated products and the total number of pages.
 */
const getProduct = async (req, res) => {
    let { page, order, category, quantity } = req.query;
    const limit = 8;
    const query = {};

    if (category) {
        query.category = { $in: category };
    }
    if (quantity) {
        query.quantity = { $in: quantity };
    }

    try {
        let product = await productModel.find(query);

        if (order === "") {
            product = product.sort((a, b) => a.id - b.id);
        } else if (order === "asc") {
            product = product.sort((a, b) => a.price - b.price);
        } else if (order === "desc") {
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

/**
 * Retrieves a single product from the database based on the provided ID.
 *
 * @param {Object} req - The request object containing the ID parameter.
 * @param {Object} res - The response object to send back the product data or error message.
 * @return {Promise} A promise that resolves with the product data or rejects with an error message.
 */
const getSingleProduct = async (req, res) => {
    let { id } = req.params;
    try {
        const data = await productModel.find({ id: id });
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
};

/**
 * Retrieves products from the database that match the specified name.
 *
 * @param {Object} req - The request object.
 * @param {string} req.params.name - The name to search for.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A promise that resolves with the search results or rejects with an error.
 */
const getForSearchProduct = async (req, res) => {
    try {
        const title = req.params.name; // Update the parameter to req.params.name
        const regex = new RegExp(title, "i");
        const result = await productModel.find({ title: regex }); // Search by the 'title' field instead of 'id'
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Internal server error" });
    }
};


module.exports = { getProduct, getSingleProduct, getForSearchProduct };
