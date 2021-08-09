DROP SCHEMA IF EXISTS zoo;
CREATE SCHEMA IF NOT EXISTS zoo;
USE zoo;
CREATE TABLE animals(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  species VARCHAR(50) NOT NULL,
  sex VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  location VARCHAR(50) NOT NULL
) ENGINE = InnoDB;
CREATE TABLE managers(
  manager_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
) ENGINE = InnoDB;
CREATE TABLE responsible(
  responsible_id INT PRIMARY KEY AUTO_INCREMENT,
  manager_id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES managers(manager_id)
) ENGINE = InnoDB;
CREATE TABLE animal_responsible(
  animal_id INT NOT NULL,
  responsible_id INT NOT NULL,
  FOREIGN KEY (animal_id) REFERENCES animals(animal_id),
  FOREIGN KEY (responsible_id) REFERENCES responsible(responsible_id)
) ENGINE = InnoDB;