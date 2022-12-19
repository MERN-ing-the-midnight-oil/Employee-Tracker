--select * from role;
USE tracker_db;

INSERT INTO departments (deptname)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");
       
INSERT INTO role (title, department_id, salary)
VALUES 
( "Sales Lead", 4, 100000),
( "Sales Lead", 4, 80000),
( "Salesperson", 4, 150000),
( "Lead Engineer", 1, 120000),
( "Software Engineer", 1, 160000),
( "Account Manager", 2, 160000),
( "Accountant", 2, 125000),
( "Legal Team Lead", 3, 250000),
( "Lawyer", 3, 190000);

-- employee role_id's need to match role id's 
Insert Into employees (first_name, last_name, role_id, manager_id)
VALUES ( "Billy", "Bob", 6, null),
( "Cathy", "Carlisle", 1, 1),
( "Dorothy", "Day", 2, 1),
( "Ella", "Englund", 3, 1),
( "Frida", "Faraday", 4, 1),
( "George", "Gotfied", 5, 1),
( "Hale", "Halloway", 6, 1),
( "Igor", "Ignatious", 7, 1),
( "Jeremy", "Jackson", 8, 1),
( "Kiera", "Knightly", 9, 1),
( "Luella", "Loxx", 1, 1);
