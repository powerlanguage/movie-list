-- CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
id INTEGER AUTO_INCREMENT,
title TEXT,
year DATE,
overview TEXT,
poster_path VARCHAR(200),
watched BOOLEAN,
PRIMARY KEY (id)
)

-- Year - Date
-- Title - Text
-- Overview - Text
-- poster_path - string
-- watched - boolean
-- vote_average - float