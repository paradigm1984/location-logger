const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("morgan");
// var db = require("./models");

// require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
// mongoose.connect("mongodb://localhost:27017/fitness-tracker", { useNewUrlParser: true });
// mongoose.connect(
// 	process.env.MONGODB_URI ||
// 		"mongodb://heroku_fgsj1gn7:8k3nqmtcll6rqgmg73htk5emh9@ds041154.mlab.com:41154/heroku_fgsj1gn7",
// 	{ useMongoClient: true }
// );

// const exerciseRouter = require("./routes/exerciseRouter");
// const usersRouter = require("./routes/usersRouter");

// app.use("/exercises", exerciseRouter);
// app.use("/users", usersRouter);

// const connection = mongoose.connection;
// connection.once("open", () => {
// 	console.log("MongoDB database connection established successfully");
// });

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern", {
// 	useMongoClient: true
// });

app.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});
