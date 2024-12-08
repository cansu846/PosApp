

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//post işlemi sonucu objenin fieldları db eklenmedi, bu yüzden cors kullanıldı
const cors = require("cors");
const app = express();
//port belirtilmemişse varyayılan 5000 de çalışacak
const port = process.env.PORT || 5000;

//routes

const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const billRoute= require("./routes/bills.js");
const authRoute= require("./routes/auth.js");
const userRoute= require("./routes/users.js");


dotenv.config(); 

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected");
    } catch (error) {
        throw error
    }
}

//middlewares

// bir Express.js middleware fonksiyonudur ve gelen HTTP isteklerinin gövdesini (body) JSON formatında ayrıştırmayı sağlar. 
//Bu, özellikle bir API'nin istemciden gelen JSON verilerini alıp
// işlemeye ihtiyaç duyduğu durumlarda kullanılır.
app.use(express.json());
// Tüm origin'lere izin vermek için:
app.use(cors());

app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);
app.use("/api/bill", billRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);


app.listen(port, () => {
    connect();
    console.log("app listening on port: ", port);
});