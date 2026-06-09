-- DELETE THE TABLE IF IT ALREADY EXIST
DROP TABLE IF EXISTS users;


--CREATE THE USERS TABLE

CREATE TABLE IF NOT EXISTS users (
	user_id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(100) UNIQUE,
	age INTEGER CHECK (age >= 18),
	city VARCHAR(50),
	reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	
);

select * from users

--Insert Data

INSERT INTO users (name, email, age, city)
VALUES ('Prasad Adhikary', 'prasod.adhikary@gmail.com', 27, 'BANGALORE'),
('Prasanta Adhikary', 'prasanta.adhikary@gmail.com', 19, 'Delhi');

SELECT * FROM  users Order by user_id ASC;
--Update Data

UPDATE users SET age = 26 WHERE name = 'Prasad Adhikary'




-- To Rename the name column to user_name

ALTER TABLE users
RENAME COLUMN name TO user_name

SELECT * FROM  users Order by user_id ASC;



