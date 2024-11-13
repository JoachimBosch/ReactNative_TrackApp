require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri =
    "mongodb+srv://admin:passwordpassword@trackerapp.fdm42.mongodb.net/";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
    console.log("Connected to Mongo instance");
});

mongoose.connection.on("error", (err) => {
    console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
    res.send(`Your email is: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
