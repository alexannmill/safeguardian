
DROP TABLE IF EXISTS shelters CASCADE;

CREATE TABLE "shelters" (
  id SERIAL PRIMARY KEY NOT NULL,
  facility VARACHAR(100),
  lat VARACHAR(25),
  long VARACHAR(25),
  street_number INTEGER,
  street_address VARACHAR(25),
  phone VARACHAR(25),
  meals BOOLEAN,
  pets BOOLEAN,
  carts BOOLEAN,
  hours VARCHAR(25)
);

DROP TABLE IF EXISTS foodbank CASCADE;

CREATE TABLE "foodbank" (
  id SERIAL PRIMARY KEY NOT NULL,
  facility VARACHAR(100),
  lat VARACHAR(25),
  long VARACHAR(25),
  street_number INTEGER,
  street_address VARACHAR(25),
  phone VARACHAR(25),
  hours VARCHAR(25)
);

DROP TABLE IF EXISTS safe_injection CASCADE;

CREATE TABLE "safe_injection" (
  id SERIAL PRIMARY KEY NOT NULL,
  facility VARACHAR(100),
  lat VARACHAR(25),
  long VARACHAR(25),
  street_number INTEGER,
  street_address VARACHAR(25),
  phone VARACHAR(25),
  hours VARCHAR(25)
);