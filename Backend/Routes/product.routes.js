
const express = require("express");
const {
    getProduct,
    getSingleProduct,
    getForSearchProduct,
} = require("../Controllers/product.controller");

const productRouter = express.Router();

productRouter.get("/", getProduct);
productRouter.get("/:id", getSingleProduct);
productRouter.get("/search/:name", getForSearchProduct);

module.exports = { productRouter };
