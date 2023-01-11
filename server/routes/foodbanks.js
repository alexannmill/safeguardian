const express = require("express");
const router = express.Router();
const { allFoodbanks } = require("../db/queries/foodbanks");

router.get("/", (req, res) => res.send("Hello foodbanks!"));

router.get("/all", (req, res) => {
  allFoodbanks().then((foodbanks) => {
    res.status(200).send(foodBanks);
  });
});

module.exports = router;