const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/user.model");
require("dotenv").config();

// --------------------------------Register User--------------------------------

const userRegister = async (req, res) => {
    const payload = req.body;
    const { name, email, password, gender, age, mobile_no } = payload;

    const isUserPresent = await userModel.find({ email: email });

    if (isUserPresent.length) {
        res.send({ msg: "User Already Exists" });
    }
    try {
        if (name && password && email && gender && mobile_no && age) {
            const hashedPassword = bcrypt.hashSync(password, 4);
            const newUser = new userModel({
                ...payload,
                password: hashedPassword,
            });
            await newUser.save();
            res.status(200).send({
                msg: `User has been registered`,
                status: "success",
            });
        } else {
            res.status(400).send({ msg: `Please provide all details` });
        }
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
};

// --------------------------------Login User--------------------------------

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.status(200).send({
                        msg: "Login Successful",
                        token: jwt.sign({ name: "shantanu" }, "hang"),
                    });
                } else {
                    res.status(401).send({ msg: "Invalid credentials" });
                }
            });
        } else {
            res.status(404).send({ msg: "User not found" });
        }
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
};


// --------------------------------Get All User--------------------------------

const userData = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.status(200).send({ msg: `All Users`, data: allUsers });
    } catch (error) {
        res.status(400).send({
            msg: `Please Try Again Something Went Wrong!\n , ${error.message}`,
        });
    }
};

module.exports = { userRegister, userLogin, userData };
