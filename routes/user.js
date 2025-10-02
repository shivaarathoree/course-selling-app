
const express = require("express");
const Router = express.Router;
const userRouter= Router();


userRouter.post("/user/signup", (req, res) => {
    res.json({ message: "signup successful" });
});

userRouter.post("/user/signin", (req, res) => {
    res.json({ message: "signin successful" });
});

userRouter.get("/user/purchases", (req, res) => {
    res.json({ message: "" });
});



module.exports = {userRouter:userRouter};
 