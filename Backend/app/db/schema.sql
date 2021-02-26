DROP DATABASE IF EXISTS todos_db;
CREATE DATABASE todos_db;

USE todos_db;
CREATE TABLE to_dos
(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ,
    completed BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO to_dos
    (title,created,description)
VALUES
    ('Cook' ,'2021-02-25 09:35:33','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis augue, consectetur quis ullamcorper congue, lobortis vitae urna. Vestibulum ut consectetur mauris. Nunc rutrum, ligula hendrerit pellentesque tincidunt, justo lacus luctus integer.'),
    ('Wash','2021-02-25 09:35:33','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis augue, consectetur quis ullamcorper congue, lobortis vitae urna. Vestibulum ut consectetur mauris. Nunc rutrum, ligula hendrerit pellentesque tincidunt, justo lacus luctus integer.'),
    ('Paint','2021-02-25 09:35:33','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis augue, consectetur quis ullamcorper congue, lobortis vitae urna. Vestibulum ut consectetur mauris. Nunc rutrum, ligula hendrerit pellentesque tincidunt, justo lacus luctus integer.');