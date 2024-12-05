const mongoose = require("mongoose");

const  CategorySchema = mongoose.Schema(
    {
        title: {type: String, require:true}
    },
    //oluşturuldugu zaman öğrenmeye yarar
    {timestamps:true}
);
// categories: table name
const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;