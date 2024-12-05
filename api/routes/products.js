const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();


router.get("/get-all", async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error)
    }
});

router.post("/add", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(200).json("added");
    } catch (error) {
        res.status(400).json(error)
    }
});

router.put("/update", async (req, res) => {
    try {
        await Product.findOneAndUpdate({ _id: req.body.productId }, req.body)
        res.status(200).json("updated");
    } catch (error) {
        res.status(400).json(error)
    }
});

router.delete("/delete", async (req, res) => {
    try {
       await Product.findOneAndDelete({ _id: req.body.productId })
        res.status(200).json("deleted");
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports=router;