
const express = require("express");
const Router = express.Router;
const userRouter= Router();
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD}= require("../config");
const { userModel} = require("../db");
const { userMiddleware } = require("../middlewares/user");

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

userRouter.get("/purchases", userMiddleware, async (req, res) => {
    const userId = req.userId;

    const purchases=await purchaseModel.find({userId});
    res.json({ purchases });
});



module.exports = {userRouter:userRouter};
 