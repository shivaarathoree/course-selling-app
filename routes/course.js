const express = require("express");
const { userMiddleware } = require("../middlewares/user");
const { purchaseModel, courseModel } = require("../db");
const Router = express.Router;
const courseRouter= Router();



courseRouter.post("/purchase", userMiddleware, async (req, res) => {
    const {userId, courseId} = req.body;
    //expecting the user to pay for the course
    await purchaseModel.create({userId, courseId});
    res.json({ message: "you have successfully bought the course" });
});

courseRouter.get("/preview", async (req, res) => {
    const courses= await courseModel.find({});
    res.json({courses });
});


module.exports ={
 courseRouter:courseRouter
} 