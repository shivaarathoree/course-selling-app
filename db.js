const mongoose = require("mongoose");
const user = require("./routes/user");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
console.log("conntected to mongoose")
mongoose.connect("mongodb+srv://shivarathore282004_db_user:g0KZkFF6eBKa0LSM@cluster0.zstvmvs.mongodb.net/coursera-app");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: String,
    lastname: String,
});

const adminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: String,
    lastname: String, 
});

const courseSchema =new Schema({
    title: String,
    description : String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};

