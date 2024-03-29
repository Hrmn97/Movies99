const express = require("express");
const router = express.Router();
const CryptoJs = require("crypto-js")

const User = require("../models/User")


//Register
router.post("/register", async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    })
    try{
        const user = await newUser.save();
        res.status(201).json(user)
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
    
})


module.exports = router;