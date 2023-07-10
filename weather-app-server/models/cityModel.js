import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    location: {
        country: {type: String},
        name: {type: String},
        region: {type : String},
    },
    current: {
        tempC: {type: Number},
        tempF: {type: Number},
        condition: {type: String},
        icon: {type: String},
    }
});

export const cityModel = mongoose.model("cities",citySchema)