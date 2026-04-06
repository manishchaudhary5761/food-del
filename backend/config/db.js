import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect(
      "mongodb+srv://cgolu2829:9997778195@cluster0.fzkxrqp.mongodb.net/food-del").then(()=>console.log("DB Connected"));
}