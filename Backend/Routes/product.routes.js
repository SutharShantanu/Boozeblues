const express = require("express");
const {
    getProduct,
    getSingleProduct,
} = require("../Controllers/product.controller");

const productRouter = express.Router();

productRouter.get("/", getProduct);
productRouter.get("/:id", getSingleProduct);

module.exports = { productRouter };
