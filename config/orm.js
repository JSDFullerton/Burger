// REQUIRED EXT FILES & PACKAGES
var connection = require("../config/connection.js");






// ORM FUNCTIONS (?? = table or col, ? = values)
var orm = {

	// SELECT ALL FUNCTION
		selectAll: function(tableName, cb) {

			var queryString = "SELECT * FROM ??";
			console.log("Select All Query :" + queryString);

			connection.query(queryString, [tableName], function(err, result) {
				
				console.log("SELECT ALL RESULT: " + result);
			
			});// close SQL query
		},// close selectAll funct



	// INSERT ONE FUNCTION ("Add New Burger")
		insertOne: function(tableName, cols, vals, cb) {

			var queryString = "INSERT INTO ?? (burger_name, devoured)";
			queryString += " VALUES ('?', '?')";
			console.log("Create Burger Query: " + queryString);

			connection.query(queryString, [tableName, cols, vals, cb], function(err, result) {
				
				console.log(result);
			
			});// close SQL query
		},// close insertOne funct.



	// UPDATE ONE FUNCTION ("Devour")
	// needs to be in DESC Order by ID
		updateOne: function(tableName, objColVals, condition, cb) {

			var queryString = "UPDATE ?? SET devoured = 'true' WHERE id = ?";
			queryString += " ORDER BY id DESC";
			console.log("Devour Burger Query: " + queryString);

			connection.query(queryString, [tableName, objColVals, condition, cb], function(err, result) {

				console.log(result);
			
			});// close SQL query
		}// close updateOne funct

}// close ORM Func


// EXPORT ORM FUNCTIONS
module.exports = orm;








