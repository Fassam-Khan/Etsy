import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://fassam:fassamkhan@cluster0.fu9onkr.mongodb.net/ETSY');

    console.log("✅ DB Connected");
  } catch (error) {
    console.error("❌ DB Connection Error:", error);
  }
};
