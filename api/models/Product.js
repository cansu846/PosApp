const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({

    title: { type: String, require: true },
    img: { type: String, require: false },
    price: { type: Number, require: true },
    category: { type: String, require: true },

  //oluşturuldugu zaman öğrenmeye yarar
}, { timestamps: true });

// products: table name
const Product = mongoose.model("products", ProductSchema);
module.exports = Product;