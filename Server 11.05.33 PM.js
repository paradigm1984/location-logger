const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

	//start server
app.listen(port, (req, res) => {
	console.log(`server listening on port: ${port}`);
});


