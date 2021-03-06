// REQUIRED EXT FILES & PACKAGES
var express = require("express");
var router = express.Router();

// IMPORT model (burger.js) to use in func
var burger = require("../models/burger.js");




// CREATE ROUTES

	// GET ROUTE - Display Burgers
	router.get("/", function(req, res) {
		console.log("TEST ROUTE", burger.selectAll());

		burger.selectAll(function(data) {
			console.log("TEST SELECT ALL 2nd Funct:");

			var burgerHBSObject = {
				burger: data
			};

			console.log("Handlebar Key & Val: " + burgerHBSObject);
			res.render("index", burgerHBSObject);
		});
	});

	// POST ROUTE - add burgers
	router.post("/", function(req, res) {
		burger.insertOne([
			"name"

		], [
			req.body.name
		], function() {
			res.redirect("/");
		});
	});


	// PUT - change value devoured
	router.put("/:id", function(req, res) {
		var condition = "id = " + req. params.id;

		console.log("Condition: " + condition);

		burger.updateOne({

			devoured: "true"
		}, condition, function() {
			res.redirect("/");
		});
	});

	
	// DELETE - remove burger from eaten list
	router.delete("/:id", function(req,res) {
		var condition = "id = " + req.params.id;

		burger.delete(condition, function() {

			res.redirect("/");
		});
	});


// EXPORT ROUTE FOR SERVER.js
module.exports = router;
