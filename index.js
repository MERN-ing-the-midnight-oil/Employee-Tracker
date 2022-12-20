const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");
const cTable = require("console.table");
const { json } = require("body-parser");

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

//??I'm not sure if this is the best place to put roleArray???
// const roleArray = () => {
// 	db.query("SELECT * FROM role", function (err, results) {
// 		console.log(results);
// 		return json.parse(results); //should I parse the results?
// 	});
// };
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
};
mainMenu();
//VIEW ALL EMPLOYEES
const viewAllEmployees = () => {
	db.query("SELECT * FROM employees", function (err, results) {
		console.table(results);
	});
};

const addEmployee = () => {
	inquirer.prompt([
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
			choices: [roleArray], //any chance this will work?
		},
		{
			type: "list",
			name: "employeeManager",
			message: "Who is the employee's manager? (select from list)",
			choices: [managerArray],
		},
	]);
};
//Add Employee
//-----What is the employee's first name?
//-----What is the employee's last name?
//-----What is the employee's role? (select from list)
//-----Who is the employee's manager? (select from list)

//const updateEmployeeRole = () => {};
//const viewAllRoles = () => {};

//ADD A ROLE
const addRole = () => {
	//declaring roleArray, an array of roles to choose from
};
inquirer.prompt([
	{
		type: "input",
		message: "What is the name of the role?",
		name: "roleAdded",
	},
	{
		type: "input",
		message: "What is the salary of the role?",
		name: "salaryAdded",
	},
	{
		type: "list",
		name: "departmentAdded",
		message: "Which department does the role belong to?",
		choices: ["Engineering", "Finance", "Legal", "Sales", "Service"], //this actually needs to be dynamic, not static, I'm thinking.There is an "Add Role" so.
	},
]);

//const viewAllDepartments = () => {};
//const addDepartment = () => {};

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

//check out 04-Slides> fs-12-SQL.pdf
// Activity 11 in week 12 tells how to use a node package in MySQL2
//Node , on its own, doesn't know how to connect to MySQL. So we need the package. from packag.json in activity ll.
