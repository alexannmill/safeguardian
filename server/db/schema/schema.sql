
DROP TABLE IF EXISTS shelters CASCADE;

CREATE TABLE "shelters" (
  id SERIAL PRIMARY KEY NOT NULL,
  facility VARCHAR(100),
  category VARCHAR(100),
  lat NUMERIC(6,4),
  long NUMERIC(7,4),
  street_number INTEGER,
  street_address VARCHAR(25),
  phone VARCHAR(25),
  meals BOOLEAN,
  pets BOOLEAN,
  carts BOOLEAN,
  hours VARCHAR(25)
);

DROP TABLE IF EXISTS foodbanks CASCADE;

CREATE TABLE "foodbanks" (
  id SERIAL PRIMARY KEY NOT NULL,
  facility VARCHAR(100),
  lat NUMERIC(6,4),
  long NUMERIC(7,4),
  street_number INTEGER,
  street_address VARCHAR(25),
  phone VARCHAR(25),
  hours VARCHAR(25)
);

DROP TABLE IF EXISTS safe_injection CASCADE;

CREATE TABLE "safe_injection" (
  id SERIAL PRIMARY KEY NOT NULL,
  facility VARCHAR(100),
  lat NUMERIC(6,4),
  long NUMERIC(7,4),
  street_number INTEGER,
  street_address VARCHAR(25),
  phone VARCHAR(25),
  hours VARCHAR(25)
);