// REQUIRED EXT FILES & PACKAGES
var orm = require("../config/orm.js");


// BURGER SPECIFIC INPUT ORM FUNCTIONS
var burger = {

	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {

			cb(res);
		
		});// close ORM to burgers table
	},// close selectAll func.

	insertOne: function(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function(res) {

			cb(res);

		});// close ORM to burgers table
	},// close insertOne func.

	updateOne: function(objColVals, condition, cb) {
		orm.updateOne("burgers", objColVals, condition, function(res) {

			cb(res);

		});// close ORM to burgers table
	},// close updateOne func.

	delete: function(condition, cb) {
		orm.delete("burgers", condition, function(res) {

			cb(res);

		});// close ORM to burgers table
	}// close delete func.
};// close burger var


// EXPORT Database ORM functions for controller JS File
module.exports = burger;
