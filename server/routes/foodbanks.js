const express = require("express");
const router = express.Router();
const { allFoodbanks } = require("../db/queries/foodbanks");

router.get("/", (req, res) => res.send("Hello foodbanks!"));

router.get("/all", (req, res) => {
  console.log("func");
  allFoodbanks().then((result) => {
    const foodBanks = result;
    console.log("foodbanks:", foodBanks);
    res.status(200).send(foodBanks);
  });
});

module.exports = router;