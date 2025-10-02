const express = require("express");
const Router = express.Router;
const courseRouter= Router();



courseRouter.post("/purchase", (req, res) => {
    //expecting the user to pay for the course
    res.json({ message: "" });
});

courseRouter.get("/preview", (req, res) => {
    res.json({ message: "helloo" });
});


module.exports ={
 courseRouter:courseRouter
} 