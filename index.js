require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());



const { userRouter } = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");


app.use("/user", userRouter);//thats how we use routers 
app.use("/course",  courseRouter);
// now if we want to add like admin routes we can do it like this
// const { adminRouter } = require("./routes/admin");
app.use("/admin", adminRouter);



async function main() {


   await mongoose.connect(process.env.MONGODB_URL);
    console.log("conntected to mongoose")
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

}

main()