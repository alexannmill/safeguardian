const express = require("express");
const router = express.Router();
const {
  allShelters,
  sheltersCarts,
  sheltersMeals,
  sheltersPets,
} = require("../db/queries/shelters.js");

router.get("/", (req, res) => res.status(200).send("Hello shelters!"));

router.get("/all", (req, res) => {
  allShelters().then((shelters) => {
    console.log("shelters:", shelters);
    res.status(200).send(shelters);
  });
});

router.get("/pets", (req, res) => {
  sheltersPets().then((shelters) => {
    res.status(200).send(shelters);
  });
});

router.get("/carts", (req, res) => {
  sheltersCarts().then((shelters) => {
    res.send(shelters);
  });
});

router.get("/meals", (req, res) => {
  sheltersMeals().then((shelters) => {
    res.send(shelters);
  });
});

module.exports = router;