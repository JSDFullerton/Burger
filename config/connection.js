// CREATE MYSQL CONNECTION
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"

});

// ACTIVATE SQL CONNECTION
connection.connect(function(err) {

	if (err) {
		console.error("ERROR CONNECTING TO SQL: " + err.stack);
		return;
	}

	console.log("SQL CONNECTED AS ID: " + connection.threadId);

});


// EXPLORT SQL CONNECTION for ORM USE
module.exports = connection;

