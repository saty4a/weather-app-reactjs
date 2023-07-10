import express, { Router }  from "express";
import cors from "cors";
import * as routers from "./routes.js"
import config from "./config.js";
import { database } from "./databaseConnection.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(routers.app);

app.use((request, response, next) => {
    response.status(500).json({
        message: "page not found",
    })
})

app.listen(config.port, () => {
    console.log(`server running on ${config.port}`)
})