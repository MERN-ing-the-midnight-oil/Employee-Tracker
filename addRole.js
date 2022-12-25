const addRole = async () => {
	//the name value pairs in the departmentArray are from the mapping of departments from departmentList
	const departmentList = await db.promise().query("SELECT * FROM departments");
	const departmentArray = departmentList[0].map((whatever) => ({
		name: whatever.deptname,
		value: whatever.id, //this will be the department id, needed in later update query to the role table
	}));
	inquirer
		.prompt([
			{
				type: "input",
				message: "What is the name of the role?",
				name: "title",
			},
			{
				type: "input",
				message: "What is the salary of the role?",
				name: "salary",
			},
			{
				type: "list",
				name: "department",
				message: "Which department does the role belong to?",
				choices: departmentArray, //should get the value of the department id
			},
		])
		.then((answers) => {
			db.query(
				"INSERT INTO role (title, department_id, salary) VALUES (? ,? ,? )",
				[
					answers.title, //first ?
					answers.salary, //second ?
					answers.department, //third ?
				],
				function (err, results) {
					if (err) throw err;
					//console.table(results);
					console.log(`\n`);
					console.log(
						"---->YOUR NEW EMPLOYEE HAS BEEN ADDED TO 'ALL EMPLOYEES'.<----"
					);
					console.log(`\n`);
					mainMenu();
				}
			);
		});
};
