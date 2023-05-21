const express = require("express");
const { getProduct } = require("../Controllers/product.controller");

const productRouter = express.Router();

productRouter.get("/", getProduct);

module.exports = { productRouter };
