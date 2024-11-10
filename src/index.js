const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
    "mongodb+srv://admin:passwordpassword@trackerapp.fdm42.mongodb.net/";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
    console.log("Connected to Mongo instance");
});

mongoose.connection.on("error", (err) => {
    console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
    res.send("Hi There!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
