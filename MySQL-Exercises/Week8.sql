-- Further Practice 1 --
-- In which branch does David Ford work? --
SELECT branchNo FROM staff WHERE firstName="David" AND lastName="Ford";

-- Further Practice 2 --
-- Which employees work in branch B003? --
SELECT * FROM staff WHERE branchNo="B003";

-- Further Practice 3 --
-- Which branches are located in London? --
SELECT * FROM branch WHERE city="London";

-- Further Practice 4 --
-- What are the names of employees who have salary greater than 20,000? --
SELECT CONCAT(firstName," ",lastName) FROM staff WHERE salary>=20000;

-- Further Practice 5 --
-- What is the average salary? The largest? The smallest? --
SELECT AVG(salary) FROM staff;
SELECT MAX(salary) FROM staff;
SELECT MIN(salary) FROM staff;

-- Further Practice 6 --
-- What are the names of employees who have a below average salary? Above average? --
SELECT CONCAT(firstName," ",lastName) FROM staff WHERE salary>=(SELECT AVG(salary) FROM staff);
SELECT CONCAT(firstName," ",lastName) FROM staff WHERE salary<=(SELECT AVG(salary) FROM staff);

-- Further Practice 7 --
-- Produce the list of all employees sorted by salary in ascending order. Do the same in descending order. --
SELECT * FROM staff ORDER BY salary DESC; 
SELECT * FROM staff ORDER BY salary ASC;

-- Further Practice 8 --
-- Who are the three lowest paid employees? --
SELECT * FROM staff ORDER BY salary ASC LIMIT 3;

-- Further Practice 9 --
-- Determine the set of all job titles (positions). That is, find the list of all job titles without duplication. -- 
SELECT position FROM staff GROUP BY position;

-- Further Practice 10 --
-- What are the names and salaries of employees who work in London? --
SELECT CONCAT(firstName," ",lastName), salary FROM staff JOIN branch ON branch.branchNo = staff.branchNo WHERE branch.city="London";

-- Further Practice 11 --
-- Are there any assistants working in Aberdeen? --
SELECT staff.* FROM staff JOIN branch ON branch.branchNo = staff.branchNo WHERE position="Assistant" and branch.city="Aberdeen";

-- Further Practice 12 --
-- Employees in which city have the highest salary --
SELECT branch.city FROM staff JOIN branch ON branch.branchNo = staff.branchNo ORDER BY staff.salary DESC LIMIT 1;

-- Further Practice 13 --
-- What is the top salary in Glasgow? --
SELECT staff.salary FROM staff JOIN branch ON branch.branchNo=staff.branchNo WHERE branch.city="Glasgow" ORDER BY staff.salary DESC LIMIT 1;

-- Further Practice 14 --
-- Which branches do not have a manager? --
SELECT branchNo FROM branch WHERE branchNo NOT IN (SELECT branchNo from staff WHERE position="Manager" GROUP BY branchNo);

-- Further Practice 15 --
-- Which branches do not have any employees? --
SELECT branchNo FROM branch WHERE branchNo NOT IN (SELECT branchNo from staff GROUP BY branchNo);

-- Further Practice 16 --
-- Find all last names ending with an "e" --
SELECT lastName FROM staff WHERE lastName LIKE "%e";

-- Further Practice 17 --
-- Reward Susan Brand who works in B003 as a manager by raising her salary to 36,000. --
UPDATE staff SET salary=36000 WHERE firstName = "Susan" and lastName = "Brand" 

-- Further Practice 18 --
-- In fact, let’s reward all managers: raise their salaries by 10%. --
UPDATE staff SET salary=salary*1.1 WHERE position="Manager";

-- Further Practice 19 --
-- Branch B007 is closing. Remove all employees working there, and remove the branch itself. --
DELETE FROM staff WHERE branchNo = "B007";
DELETE FROM branch WHERE branchNo = "B007";

-- Further Practice 20 --
-- Hire a new employee. Her name is Mary Smith and she will be working as an assistant in the Glasgow branch with the starting salary of 22, 000. --
INSERT INTO staff VALUES ("SG38","Mary","Smith","Assistant",22000,(SELECT branchNo FROM branch WHERE city="Glasgow"));