

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//post işlemi sonucu objenin fieldları db eklenmedi, bu yüzden cors kullanıldı
const cors = require("cors");
const app = express();
const port = 5000;

//routes

const categoryRoute = require("./routes/categories.js");


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


app.listen(port, () => {
    connect();
    console.log("app listening on port: ", port);
});