

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = 5000;

dotenv.config(); 

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected");
    } catch (error) {
        throw error
    }
}
app.get("/", (req, res) => { res.send("hello world") });


app.listen(port, () => {
    connect();
    console.log("app listening on port: ", port);
});