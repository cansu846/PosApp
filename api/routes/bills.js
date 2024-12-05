const Bill = require("../models/Bill.js");
const express = require("express");
const router = express.Router();


router.post("/add", async(req,res)=>{
try {
    //request ile frontend arafında creatw category tarafından veriler alınır
   const newBill = new Bill(req.body);
   await newBill.save();
   res.status(200).json("Item added succesfully...");
} catch (error) {
    res.status(400).json(error);
}
});

router.get("/get-all", async(req,res)=>{
try {
    const bills = await Bill.find();
    res.status(200).json(bills);
} catch (error) {
    res.status(400).json(error);
}
});

router.put("/update",async(req,res)=>{
try {
    //postman de BillId adı kullanıldı
    await Bill.findOneAndUpdate({_id: req.body.billId}, req.body);
    res.status(200).json("Item updated")
} catch (error) {
    res.status(400).json(error)
}
});

router.delete("/delete", async(req, res)=>{
try {
    await Bill.findOneAndDelete({_id: req.body.billId});
    res.status(200).json("deleted")
} catch (error) {
    res.status(400).json(error);
}
});
module.exports=router;