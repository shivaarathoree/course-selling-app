
const express = require("express");
const Router = express.Router;
const userRouter= Router();


userRouter.post("/signup", (req, res) => {
    res.json({ message: "signup successful" });
});

userRouter.post("/signin", (req, res) => {
    res.json({ message: "signin successful" });
});

userRouter.get("/purchases", (req, res) => {
    res.json({ message: "here you can see your coruses" });
});



module.exports = {userRouter:userRouter};
 