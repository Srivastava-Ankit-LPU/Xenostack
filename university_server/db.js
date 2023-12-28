import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl, {
  
  // Add the following lines for the new options
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("MongoDb connection failed");
});

connection.on("connected", () => {
  console.log("Mongodb connected Successfully");
});

export default mongoose;
