const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


	//start server
app.listen(port, (req, res) => {
	console.log(`server listening on port: ${port}`);
});


