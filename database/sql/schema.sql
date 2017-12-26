-- CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
id INTEGER AUTO_INCREMENT,
video_id INTEGER,
title TEXT,
overview TEXT,
year DATE,
poster_path VARCHAR(200),
vote_average DOUBLE,
watched BOOLEAN,
PRIMARY KEY (id),
UNIQUE KEY (video_id)
)

-- Year - Date
-- Title - Text
-- Overview - Text
-- poster_path - string
-- watched - boolean
-- vote_average - float