const db = require("../db_index");

export const allShelters = () => {
  return db.query(`SELECT * FROM shelters`).then((res) => {
    const result = res.rows;
    console.log("result:", result);
    return result;
  });
};
