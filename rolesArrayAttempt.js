const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");
const cTable = require("console.table");
const { json } = require("body-parser");
const { leftPadder } = require("easy-table");

//creates a connection to the database
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "tracker_db",
});
//defining and triggering//a callback funtion, as its a method running a function, its a function within a function so therefore it is a callback function.
db.connect(function (error) {
	if (error) throw error; //alternately could console log the error. if and throw are built in for this scenario
	console.log("connected to database");
});

//I'm going to need to populate the "choices" with rolesArray  in the ADD AN EMPLOYEE choice
const rolesQuery = () => {
	db.query("SELECT * FROM role", function (err, results) {
		//console.log(results);
		const rolesArray = [];
		for (var i = 0; i < results.length; i++) rolesArray.push(results[i].title);
		//return rolesArray;
		console.log(rolesArray);
	});

	db.end(); //closes the connection , (do this after inquirer questions are done)
	//console.log(rolesQuery());
};
rolesQuery();
