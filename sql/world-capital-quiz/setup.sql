-- Creates the capitals table and loads capitals.csv. Run it from this folder:
--   createdb world
--   psql -d world -f setup.sql

CREATE TABLE capitals (
  id SERIAL PRIMARY KEY,
  country VARCHAR(45),
  capital VARCHAR(45)
);

\copy capitals (id, country, capital) FROM 'capitals.csv' WITH (FORMAT csv, HEADER true)
