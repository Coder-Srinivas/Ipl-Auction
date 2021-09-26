const express = require("express");
const User = require("../database/models/user.model");
const router = express.Router();
const { auth } = require("../middleware/auth");

router.get("/played-auctions", auth, async (req, res) => {
  const user = await User.findById(req.id);
  res.status(200).send({
    success: true,
    message: "Fetched Users",
    auctions: user.auctions,
  });
});

module.exports = router;
