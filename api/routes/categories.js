const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();


router.post("/add", async(req,res)=>{
try {
    //request ile frontend arafında creatw category tarafından veriler alınır
   const newCategory = new Category(req.body);
   await newCategory.save();
   res.status(200).json("Item added succesfully...");
} catch (error) {
    res.status(400).json(error);
}
});

router.get("/get-all", async(req,res)=>{
try {
    const categories = await Category.find();
    res.status(200).json(categories);
} catch (error) {
    res.status(400).json(error);
}
});

router.put("/update",async(req,res)=>{
try {
    //postman de categoryId adı kullanıldı
    await Category.findOneAndUpdate({_id: req.body.categoryId}, req.body);
    res.status(200).json("Item updated")
} catch (error) {
    res.status(400).json(error)
}
});

router.delete("/delete", async(req, res)=>{
try {
    await Category.findOneAndDelete({_id: req.body.categoryId});
    res.status(200).json("deleted")
} catch (error) {
    res.status(400).json(error);
}
});
module.exports=router;