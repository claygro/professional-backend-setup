import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    //our mongodb uri is in .env file so we import from .env file.
    //syntax is process.fileName.variable name.
    //importing the database name from constant folder.
    console.log(
      `\n Mongodb connected is DB hose:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(
      "Error is in connection in database which is in database.js file.",
      error
    );
  }
};
export default dbConnection;
