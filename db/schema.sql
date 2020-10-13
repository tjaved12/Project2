DROP DATABASE IF EXISTS `diet_db`;
CREATE DATABASE `diet_db`;

select * from diet_db.users;

CREATE TABLE Day1(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    breakfast VARCHAR(255) NOT NULL,
    amsnack VARCHAR(255) NOT NULL,
    lunch VARCHAR(255) NOT NULL,
    pmsnack VARCHAR(255) NOT NULL,
    dinner VARCHAR(255) NOT NULL, 
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL
    );



-- Use this to add columns to existing database with appropriate table name
ALTER TABLE diet_db.day1 
ADD COLUMN amsnack VARCHAR(255) NOT NULL AFTER breakfast,
ADD COLUMN pmsnack VARCHAR(255) NOT NULL AFTER lunch;

-- Use this to update data in existing database with appropriate table name and data
UPDATE day1
SET breakfast = "Avocado Egg Toast", amsnack = "Blueberries", lunch = "Loaded Black Bean Nacho Soup", pmsnack = "Orange", dinner = "Seared Salmon with Green Peppercorn Sauce";