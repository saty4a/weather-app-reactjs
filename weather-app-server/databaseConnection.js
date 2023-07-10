import mongoose from "mongoose";
import config from "./config.js";

mongoose.connect(`mongodb+srv://${config.userName}:${config.password}@cluster0.u6rrapl.mongodb.net/${config.databaseName}`,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export const database = mongoose.connection;

database.on("error", (error) => {
    console.log("Error in MongoDB connection: " + error);
})

database.once("open",() => {
    console.log("connected successfully");
})