CREATE DATABASE if NOT EXISTS companydb;

USE companydb;

create TABLE emplado(
id INT(11) not NULL AUTO_INCREMENT,
name VARCHAR(45) DEFAULT null,
PRIMARY KEY(id)

);

INSERT INTO emplado VALUES (1,"pedro",1000),(,"maria",1500),("juan",2000);