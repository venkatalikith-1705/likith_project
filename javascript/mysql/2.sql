// mysql experiment 2
CREATE TABLE IF NOT EXISTS students(id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(100) NOT NULL,email VARCHAR(150) UNIQUE,marks INT DEFAULT 0); INSERT INTO students(name,email,marks) VALUES("Asha","asha@example.com",85); SELECT * FROM students WHERE marks>=40 ORDER BY marks DESC;
