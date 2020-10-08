DROP DATABASE IF EXISTS `diet_db`;
CREATE DATABASE `diet_db`;

select * from diet_db.users;

CREATE TABLE day1(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    breakfast VARCHAR(255) NOT NULL,
    amsnack VARCHAR(255) NOT NULL,
    lunch VARCHAR(255) NOT NULL,
    pmsnack VARCHAR(255) NOT NULL,
    dinner VARCHAR(255) NOT NULL, 
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL
    );

    CREATE TABLE day2(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    breakfast VARCHAR(255) NOT NULL,
    amsnack VARCHAR(255) NOT NULL,
    lunch VARCHAR(255) NOT NULL,
    pmsnack VARCHAR(255) NOT NULL,
    dinner VARCHAR(255) NOT NULL, 
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL
    );

    CREATE TABLE day3(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    breakfast VARCHAR(255) NOT NULL,
    amsnack VARCHAR(255) NOT NULL,
    lunch VARCHAR(255) NOT NULL,
    pmsnack VARCHAR(255) NOT NULL,
    dinner VARCHAR(255) NOT NULL, 
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL
    );

    CREATE TABLE day4(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    breakfast VARCHAR(255) NOT NULL,
    amsnack VARCHAR(255) NOT NULL,
    lunch VARCHAR(255) NOT NULL,
    pmsnack VARCHAR(255) NOT NULL,
    dinner VARCHAR(255) NOT NULL, 
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL
    );

    CREATE TABLE day5(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    breakfast VARCHAR(255) NOT NULL,
    amsnack VARCHAR(255) NOT NULL,
    lunch VARCHAR(255) NOT NULL,
    pmsnack VARCHAR(255) NOT NULL,
    dinner VARCHAR(255) NOT NULL, 
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL
    );

    CREATE TABLE day6(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    breakfast VARCHAR(255) NOT NULL,
    amsnack VARCHAR(255) NOT NULL,
    lunch VARCHAR(255) NOT NULL,
    pmsnack VARCHAR(255) NOT NULL,
    dinner VARCHAR(255) NOT NULL, 
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL
    );

    CREATE TABLE day7(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    breakfast VARCHAR(255) NOT NULL,
    amsnack VARCHAR(255) NOT NULL,
    lunch VARCHAR(255) NOT NULL,
    pmsnack VARCHAR(255) NOT NULL,
    dinner VARCHAR(255) NOT NULL, 
    createdAt DATETIME NOT NULL, 
    updatedAt DATETIME NOT NULL
    );

-- Use this to add columns to existing database with appropriate table name
ALTER TABLE diet_db.day1 
ADD COLUMN amsnack VARCHAR(255) NOT NULL AFTER breakfast,
ADD COLUMN pmsnack VARCHAR(255) NOT NULL AFTER lunch;

-- Use this to update data in existing database with appropriate table name and data
UPDATE day1
SET breakfast = "Avocado Egg Toast", amsnack = "Blueberries", lunch = "Loaded Black Bean Nacho Soup", pmsnack = "Orange", dinner = "Seared Salmon with Green Peppercorn Sauce";