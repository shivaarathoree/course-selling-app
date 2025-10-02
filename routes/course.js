const express = require("express");
const Router = express.Router;
const courseRouter= Router();



courseRouter.get("/course/purchase", (req, res) => {
    //expecting the user to pay for the course
    res.json({ message: "" });
});

courseRouter.get("/course/preview", (req, res) => {
    res.json({ message: "" });
});


module.exports = courseRouter;