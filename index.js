const inquirer = require("inquirer");
const fs = require("fs");

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
//------Which employee's role do you want to update? (select from list)
//View All Roles
//Add Role
//------What is the name of the role you would like to add?
//----- Wich department does the role belong to? (select from list)
//View All Departments
//-------id, name,  2, Engineering; 3, Finance; 4, Legal; 1, Sales
//Add Department
//--------What is the name of the department you would like to add?
//-------------(Move up and down to reveal more choices)

const addRole = () => {
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
			choices: ["Engineering", "Finance", "Legal", "Sales", "Service"],
		},
	]);
};

//check out 04-Slides> fs-12-SQL.pdf
// Activity 11 in week 12 tells how to use a node package in MySQL2
//Node , on its own, doesn't know how to connect to MySQL. So we need the package. from packag.json in activity ll.
