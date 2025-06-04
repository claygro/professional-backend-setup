import dotenv from "dotenv";
import dbConnection from "./db/database.js";
import { app } from "./app.js";
dotenv.config({ path: "./env" });
//this dbconnection function is async function so it return promises. So we use .then and .catch method to handle error.
dbConnection()
  .then(() => {
    //to listen error
    app.on("error", (error) => {
      console.log("error in listening in index.js file", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("port is listining in index.js file", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("mongodb connection failed in index.js file", error);
  });
