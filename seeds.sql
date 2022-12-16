USE tracker_db;

INSERT INTO departments (id, deptname)
VALUES (1,"Engineering"),
       (2,"Finance"),
       (3,"Legal"),
       (4,"Sales");
       
INSERT INTO role (id, title, department_id, salary)
VALUES 
(10, "Sales Lead", 4, 100000),
(11, "Sales Lead", 4, 80000),
(12, "Salesperson", 4, 150000),
(13, "Lead Engineer", 1, 120000),
(14, "Software Engineer", 1, 160000),
(15, "Account Manager", 2, 160000),
(16, "Accountant", 2, 125000),
(17, "Legal Team Lead", 3, 250000),
(18, "Lawyer", 3, 190000);

Insert Into employees (id, first_name, last_name, role_id, manager_id)
VALUES (30, "Billy", "Bob", 19, 20),
(31, "Cathy", "Carlisle", 19, 20),
(32, "Dorothy", "Day", 11, 20),
(33, "Ella", "Englund", 12, 20),
(34, "Frida", "Faraday", 13, 20),
(35, "George", "Gotfied", 14, 20),
(36, "Hale", "Halloway", 15, 20),
(37, "Igor", "Ignatious", 16, 20),
(38, "Jeremy", "Jackson", 17, 20),
(39, "Kiera", "Knightly", 18, 20),
(40, "Luella", "Loxx", 18, 20);
