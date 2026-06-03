CREATE TABLE employee(
	employee_id SERIAL PRIMARY KEY, 
	name VARCHAR(50) NOT NULL,
	position VARCHAR(50),
	department VARCHAR(50),
	hire_date DATE,
	salary NUMERIC(10,2)
);

SELECT * FROM employee;

INSERT INTO employee(name,position,department,hire_date,salary)
	VALUES('Jit Adhikary', 'Data Scientist', 'Data Science', '2026-09-29', 90200.00),
	('Sunny Adhikary', 'Data Scientist', 'Data Science', '2026-09-29', 90200.00),
	('Tukai Adhikary', 'Data Scientist', 'Data Science', '2026-09-29', 90200.00),
	('Kuttus Adhikary', 'Data Scientist', 'Data Science', '2026-09-29', 90200.00)

SELECT * FROM employee;