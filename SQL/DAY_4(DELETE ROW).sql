CREATE TABLE employee2(
	employee_id INT PRIMARY KEY, 
	name VARCHAR(50) NOT NULL,
	position VARCHAR(50),
	department VARCHAR(50),
	hire_date DATE,
	salary NUMERIC(10,2)
);

SELECT * FROM employee2;

INSERT INTO employee2(employee_id, name,position,department,hire_date,salary)
	VALUES(101, 'Jit Adhikary', 'Data Scientist', 'Data Science', '2026-09-29', 90200.00),
	(102, 'Sunny Adhikary', 'Data Scientist', 'Data Science', '2026-09-29', 90200.00),
	(103, 'Tukai Adhikary', 'Data Scientist', 'Data Science', '2026-09-29', 90200.00),
	(104, 'Kuttus Adhikary', 'Data Scientist', 'Data Science', '2026-09-29', 90200.00)


DELETE FROM employee2 WHERE employee_id = 103

ALTER TABLE employee2 DROP COLUMN department


DROP TABLE IF EXISTS employee3

DROP DATABASE IF EXISTS marvel