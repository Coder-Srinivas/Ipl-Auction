const express = require("express");
const schedule = require("node-schedule");
const squadData = require("../data/squads.json");
const getSquads = require("../utilities/players");
const { auth } = require("../middleware/auth");
let squads = [];
const router = express.Router();

router.get("/players", auth, (req, res) => {
  if (squads.length == 0) {
    squads = squadData;
  }

  res.send({
    squads,
  });
});

module.exports = router;
