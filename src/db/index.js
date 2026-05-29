import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("MONGODB CONNECTED: ", connInstance.connection.host);
  } catch (err) {
    console.log("MONGODB ERROR: ", err);
    process.exit(1);
  }
};

export default connectDB;