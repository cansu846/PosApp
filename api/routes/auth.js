
const User = require("../models/User.js");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Kullanıcı şifresini düz bir metin (plaintext) olarak veritabanına kaydetmek güvenlik açısından risklidir. 
// Bu nedenle, şifreler "hash" edilerek saklanır.

// 1. Hashing ve Salt Nedir?
// Hashing: Verilen bir girdiyi (örneğin, bir şifre) geri döndürülemeyen bir çıktıya dönüştürme işlemidir. Yani, hash işlemi tek yönlüdür. 
//Hash edilmiş bir şifreyi orijinal haline geri çeviremezsiniz.
// Salt: Hashleme işleminde kullanılan rastgele bir veri parçasıdır.
// Salt, her kullanıcı için farklı bir hash çıktısı üretilmesini sağlar. Aynı şifreye sahip iki kullanıcının bile farklı hash sonuçları olacaktır.

//register
router.post("/register", async(req,res)=>{
try {
    const {username, email, password} = req.body;
   
    // Burada 10, "salt rounds" olarak bilinir ve hashleme işleminin karmaşıklığını belirler. Daha büyük bir sayı daha güvenli ancak daha yavaştır.
    //request ile frontend arafında creatw category tarafından veriler alınır
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        username,
        email,
        password:hashedPassword
    });
   await newUser.save();
   res.status(200).json(newUser);
} catch (error) {
    res.status(400).json(error);
}
});

//! login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).send({ error: "User not found!" });
      }
    
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(403).json("Invalid password!");
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  });

module.exports=router;