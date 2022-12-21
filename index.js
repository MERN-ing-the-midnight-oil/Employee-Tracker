const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");
const cTable = require("console.table");
const { json } = require("body-parser");
const { leftPadder } = require("easy-table");
const util = require("util");

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

//MAIN MENU SELCTION
const mainMenu = () => {
	inquirer
		.prompt([
			{
				type: "list",
				name: "choice",
				message: "What would you like to do? (Use arrow keys to navigate)",
				choices: [
					"View All Employees",
					"Add Employee",
					"Update Employee Role",
					"View All Roles",
					"Add Role",
					"View All Departments",
					"Add Department",
				],
			},
		])
		.then((response) => {
			if (response.choice === "View All Employees") {
				viewAllEmployees(); //run viewAllEmployees
			} else if (response.choice === "Add Employee") {
				addEmployee(); //run addEmployee
			} else if (response.choice === "Update Employee Role") {
				updateEmployeeRole(); //run updateEmployeeRole
			} else if (response.choice === "View All Roles") {
				viewAllRoles(); //run viewAllRoles
			} else if (response.choice === "Add Role") {
				addRole(); //run addRole
			} else if (response.choice === "View All Departments") {
				viewAllDepartments(); //run viewAllDepartments
			} else if (response.choice === "Add Department") {
				addDepartment(); //run addDepartment
			}
		});
	console.log(""); //prints a carriage return, somehow.
};
mainMenu();
//VIEW ALL EMPLOYEES
const viewAllEmployees = () => {
	db.query("SELECT * FROM employees", function (err, results) {
		console.table(results);
	});
	mainMenu();
};
//VIEW ALL Roles
const viewAllRoles = () => {
	db.query("SELECT * FROM role", function (err, results) {
		console.table(results);
	});
	mainMenu();
};
//VIEW ALL departments
const viewAllDepartments = () => {
	db.query("SELECT * FROM departments", function (err, results) {
		console.table(results);
	});
	mainMenu();
};

const addEmployee = async () => {
	//await prevents code from running ahead before the query returns the promise.
	const roles = await db.promise().query("SELECT * FROM role");
	//console.log(roles[0]);
	//gets the titles only (roles) and gives them to a new array called rolesArray
	const rolesArray = roles[0].map((role) => role.title);
	//console.log("console logging roles array ", rolesArray);
	inquirer
		.prompt([
			{
				type: "input",
				message: "What is the employee's first name?",
				name: "firstName",
			},
			{
				type: "input",
				message: "What is the employee's last name?",
				name: "lastName",
			},
			{
				type: "list",
				name: "role",
				message: "What is the employee's role? (select from list)",
				choices: rolesArray,
			},
			// { //This functionality will be added in the future
			// 	type: "list",
			// 	name: "employeeManager",
			// 	message: "Who is the employee's manager? (select from list)",
			// 	choices: [managerArray],
			// },
		])
		.then((answers) => {
			//console.log("ANSWERS!!", answers);
			db.query(
				"INSERT INTO employees (first_name, last_name, role_id) VALUES (? ,? ,?)",
				[answers.firstName, answers.lastName, answers.role],
				function (err, results) {
					//Prints the updated employee table in nice, neat, table.
					console.table(results);
				}
			);
			mainMenu();
		});
};
const updateEmployeeRole = () => {
	console.log("Functionality Coming Soon!");
};

//ADD A ROLE //Coming Soon
const addRole = () => {
	console.log("Functionality coming soon!");
	// inquirer.prompt([
	// 	{
	// 		type: "input",
	// 		message: "What is the name of the role?",
	// 		name: "roleAdded",
	// 	},
	// 	{
	// 		type: "input",
	// 		message: "What is the salary of the role?",
	// 		name: "salaryAdded",
	// 	},
	// 	{
	// 		type: "list",
	// 		name: "departmentAdded",
	// 		message: "Which department does the role belong to?",
	// 		choices: [
	// 			"Dummy Role 1",
	// 			"Dummy Role 2",
	// 			"The Real thing Coming Soon",
	// 			"And it will be Dynamic",
	// 		],
	// 	},
	// ]);
	mainMenu();
};

const addDepartment = () => {
	console.log("Functionality coming soon!");
};

//MAIN MENU
//What would you like to do? (Use arrow keys to navigate)

//View All Employees
// ------The table will have id, first name, last name, title, department, salary, manager.
//Add Employee
//-----What is the employee's first name?
//-----What is the employee's last name?
//-----What is the employee's role? (select from list)
//-----Who is the employee's manager? (select from list)
//Update Employee Role
//------Which employee's role do you want to update? (select from list of all employees)
//View All Roles
//Add Role
//------What is the name of the role you would like to add?
//----- Wich department does the role belong to? (select from list)
//View All Departments
//-------id, name,  2, Engineering; 3, Finance; 4, Legal; 1, Sales
//Add Department
//--------What is the name of the department you would like to add?
//-------------(Move up and down to reveal more choices)
