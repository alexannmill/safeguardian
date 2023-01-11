const express = require("express");
const router = express.Router();
const { allSafeInjection } = require("../db/queries/safeinjections");

router.get("/", (req, res) => res.send("Hello safe I!"));

router.get("/all", (req, res) => {
  allSafeInjection().then((result) => {
    const safeInjections = result;
    console.log("safeInjectionROUTE:", safeInjections);
    res.status(200).send(safeInjections);
  });
});
module.exports = router;