const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

//Static file
app.use(express.static(path.join(__dirname, '/public/')));

//production mode
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/public/')));
	app.get('*', (req, res) => { res.sendfile(path.join(__dirname = '/public/index.html')); });
}

app.get('*', (req, res) => { res.sendFile(path.join(__dirname + '/public/index.html')); });
	
	//start server
	app.listen(port, (req, res) => { console.log(`server listening on port: ${port}`); });


