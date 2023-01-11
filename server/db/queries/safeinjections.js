const db = require("../db_index");

const allSafeInjection = () => {
  return db
    .query(
      `
    SELECT * 
    FROM safe_injection
    `
    )
    .then((res) => {
      const result = res.rows;
      console.log("resultSIQ:", result);
      return result;
    });
};

module.exports = {
  allSafeInjection,
};
