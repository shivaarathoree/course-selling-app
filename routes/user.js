
const express = require("express");
const Router = express.Router;
const userRouter= Router();
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD}= require("../config");
const { userModel} = require("../db");

userRouter.post("/signup", async (req, res) => {
    const {email, password, firstname, lastname} = req.body;

    //check if the email already exists

    await userModel.create({email, password, firstname, lastname});


    res.json({ message: "signup successful" });
});

userRouter.post("/signin",async (req, res) => {

    const {email, password} = req.body;

    const user = await userModel.findOne({email, password});
    if(user)
    {
        const token = jwt.sign({id: user._id}, JWT_USER_PASSWORD);

        res.json({token});
    }
    else
    {
        res.status(403).json({message: "Invalid Credentials"});
    }
    res.json({ message: "signin successful" });
});

userRouter.get("/purchases", (req, res) => {
    res.json({ message: "here you can see your coruses" });
});



module.exports = {userRouter:userRouter};
 