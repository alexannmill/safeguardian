const db = require("../db_index");

const allShelters = () => {
  return db
    .query(
      `
    SELECT * 
    FROM shelters 
    `
    )
    .then((res) => {
      const result = res.rows;
      console.log("result:", result);
      return result;
    });
};

const sheltersPets = () => {
  return db
    .query(
      `
    SELECT * 
    FROM shelters 
    WHERE pets = true
    `
    )
    .then((res) => {
      const result = res.rows;
      console.log("result:", result);
      return result;
    });
};

const sheltersMeals = () => {
  return db
    .query(
      `
    SELECT * 
    FROM shelters 
    WHERE meals = true
    `
    )
    .then((res) => {
      const result = res.rows;
      console.log("result:", result);
      return result;
    });
};

const sheltersCarts = () => {
  return db
    .query(
      `
    SELECT * 
    FROM shelters 
    WHERE carts = true
    `
    )
    .then((res) => {
      const result = res.rows;
      console.log("result:", result);
      return result;
    });
};

module.exports = {
  allShelters,
  sheltersCarts,
  sheltersMeals,
  sheltersPets,
};