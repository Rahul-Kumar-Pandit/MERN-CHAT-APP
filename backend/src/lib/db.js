import mongoose from "mongoose";

export const connectDB = async () => {
  try{
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected : ${connection.connection.host}`);
  }catch(err){
    console.log(`MongoDB connection error : ${err}`);
  }
};
