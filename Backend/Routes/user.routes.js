const express = require("express");
const {
    userRegister,
    userData,
    userLogin,
} = require("../Controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", userData);
userRouter.post("/signup", userRegister);
userRouter.post("/login", userLogin);

module.exports = { userRouter };
