CREATE DATABASE IF NOT EXISTS places_db;
USE places_db;

CREATE TABLE places_tbl (
    place_id int NOT NULL AUTO_INCREMENT,
    place_name varchar(255) NOT NULL,
    place_visited BOOL DEFAULT false,
    PRIMARY KEY (place_id)
);

INSERT INTO places_tbl (place_name, place_visited) VALUES ('Montreal, Canada', FALSE);
INSERT INTO places_tbl (place_name, place_visited) VALUES ('Victoria, British Columbia', FALSE);
INSERT INTO places_tbl (place_name, place_visited) VALUES ('Easter Island, Chile', FALSE);
INSERT INTO places_tbl (place_name, place_visited) VALUES ('Seattle, Washington', TRUE);
INSERT INTO places_tbl (place_name, place_visited) VALUES ('Ireland', FALSE);
INSERT INTO places_tbl (place_name, place_visited) VALUES ('Scotland', FALSE);
