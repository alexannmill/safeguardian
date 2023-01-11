const db = require("../db_index");

const allFoodbanks = () => {
  return db
    .query(
      `
    SELECT * 
    FROM foodbanks
    `
    )
    .then((res) => {
      const result = res.rows;
      console.log("result:", result);
      return result;
    });
};


module.exports = {
  allFoodbanks,
};