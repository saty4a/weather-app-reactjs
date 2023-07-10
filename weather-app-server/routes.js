import express from "express";
import { getAllCities, getCity, insertCity } from "./controllers/cities.js";

export const app = express();

//get info of cities
app.post("/add-new-city",insertCity);
app.get("/getinfo/:name",getCity);
app.get("/get-all-cities",getAllCities)