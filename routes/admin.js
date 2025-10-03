const express = require("express");
const Router = express.Router;
const adminRouter= Router();
const jwt= require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "adminaladin";
const {adminModel} = require("../db");


adminRouter.post("/signup", async (req, res) => {
    const {email, password, firstname, lastname} = req.body;

    await adminModel.create({email, password, firstname, lastname});


    res.json({ message: "signup successful" });
});


adminRouter.post("/signin", async (req, res) => {

    const {email, password} = req.body;

    const admin = await adminModel.findOne({email, password});
    if(admin)
    {
        const token = jwt.sign({id: admin._id}, JWT_ADMIN_PASSWORD);

        res.json({token});
    }
    else
    {
        res.status(403).json({message: "Invalid Credentials"});
    }
    res.json({ message: "signin successful" });
});

adminRouter.post("/course", (req, res) => {
    res.json({ message: "" });
});

adminRouter.put("/course", (req, res) => {
    res.json({ message: "" });
});
adminRouter.get("/course", (req, res) => {
    res.json({ message: "here you can see all the courses since you are an admin" });
});

module.exports ={
 adminRouter:adminRouter
}
