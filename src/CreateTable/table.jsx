create table employee (
	emp_id SERIAL PRIMARY KEY,
	fname varchar(50) NOT NULL,
	lname varchar(50) NOT NULL,
	email varchar(100) NOT NULL UNIQUE,
	dept varchar(50),
	salary DECIMAL(10,2) DEFAULT 30000.00,
	hire_date DATE NOT NULL DEFAULT CURRENT_DATE
)
