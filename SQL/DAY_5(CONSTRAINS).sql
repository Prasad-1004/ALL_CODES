CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(100) UNIQUE,
	age INTEGER CHECK (age >= 18),
	reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from users

INSERT INTO users (name, email, age)
VALUES ('Prasad Adhikary', 'prasod.adhikary@gmail.com', 27),
('Prasanta Adhikary', 'prasanta.adhikary@gmail.com', 19);