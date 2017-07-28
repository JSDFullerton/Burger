// REQUIRED EXT FILES & PACKAGES
var orm = require("../config/orm.js");


// BURGER SPECIFIC INPUT ORM FUNCTIONS
var burger = {

	selectAll: function(cb1) {
		console.log("SELECT ALL FUNCT WORKING");
		orm.selectAll("burgers", function(res) {

			cb1(res);
		
		});// close ORM to burgers table
	},// close selectAll func.

	insertOne: function(cols, vals, cb2) {
		orm.insertOne("burgers", cols, vals, function(res) {

			cb2(res);

		});// close ORM to burgers table
	},// close insertOne func.

	updateOne: function(objColVals, condition, cb3) {
		orm.updateOne("burgers", objColVals, condition, function(res) {

			cb3(res);

		});// close ORM to burgers table
	},	// close updateOne func.

	delete: function(condition, cb4) {
		orm.delete("burgers", condition, function(res) {

			cb4(res);

		});// close ORM to burgers table
	}// close delete func.
};// close burger var


// EXPORT Database ORM functions for controller JS File
module.exports = burger;
