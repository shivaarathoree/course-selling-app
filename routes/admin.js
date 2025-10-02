const express = require("express");
const Router = express.Router;
const adminRouter= Router();

const {adminModel} = require("../db");


adminRouter.post("/signup", (req, res) => {
    res.json({ message: "signup successful" });
});

adminRouter.post("/signin", (req, res) => {
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
