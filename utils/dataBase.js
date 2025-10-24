const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/HostelX");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(" MongoDB connection error:", err);
        process.exit(1);
    }
};
module.exports = connectDB;
