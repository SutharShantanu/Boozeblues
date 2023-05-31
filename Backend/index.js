const express = require("express");
const connection = require("./Config/db");
const { userRouter } = require("./Routes/user.routes");
const { productRouter } = require("./Routes/product.routes");
const { wishlistRouter } = require("./Routes/wishlist.routes");
const app = express();
var cors = require("cors");

require("dotenv").config();
app.use(express.json());
app.use(cors());

app.get(`/`, (req, res) => {
    res.send({ msg: `Welcome to the Boozeblues` });
});

app.use(`/users`, userRouter);
app.use(`/products`, productRouter);
app.use("/wishlist", wishlistRouter);

app.listen(process.env.port, async () => {
    await connection();
    console.log(`Server is running on Port ${process.env.port}`);
});
