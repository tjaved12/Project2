DROP DATABASE IF EXISTS `diet_db`;
CREATE DATABASE `diet_db`;

select * from diet_db.users;
CREATE TABLE sunday (
    sunday_id INT NOT NULL AUTO_INCREMENT,
    sunday_time VARCHAR(20) NOT NULL, 
    sunday_meal VARCHAR(20) NOT NULL,
    PRIMARY KEY (sunday_id)
);
CREATE TABLE monday (
    monday_id INT NOT NULL AUTO_INCREMENT,
    monday_time VARCHAR(20) NOT NULL, 
    monday_meal VARCHAR(20) NOT NULL,
    PRIMARY KEY (monday_id)
);
CREATE TABLE tuesday (
    tuesday_id INT NOT NULL AUTO_INCREMENT,
    tuesday_time VARCHAR(20) NOT NULL, 
    tuesday_meal VARCHAR(20) NOT NULL,
    PRIMARY KEY (tuesday_id)
);
CREATE TABLE wednesday (
    wednesday_id INT NOT NULL AUTO_INCREMENT,
    wednesday_time VARCHAR(20) NOT NULL, 
    wednesday_meal VARCHAR(20) NOT NULL,
    PRIMARY KEY (wednesday_id)
);
CREATE TABLE thursday (
    thursday_id INT NOT NULL AUTO_INCREMENT,
    thursday_time VARCHAR(20) NOT NULL, 
    thursday_meal VARCHAR(20) NOT NULL,
    PRIMARY KEY (thursday_id)
);
CREATE TABLE friday (
    friday_id INT NOT NULL AUTO_INCREMENT,
    friday_time VARCHAR(20) NOT NULL, 
    friday_meal VARCHAR(20) NOT NULL,
    PRIMARY KEY (friday_id)
);
CREATE TABLE saturday (
    saturday_id INT NOT NULL AUTO_INCREMENT,
    saturday_time VARCHAR(20) NOT NULL, 
    saturday_meal VARCHAR(20) NOT NULL,
    PRIMARY KEY (saturday_id)
);