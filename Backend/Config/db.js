const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.mongoUrl);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(`Can't connect to MongoDB`);
        console.log(`Error: ${error}`);
    }
};

module.exports =  connection ;
