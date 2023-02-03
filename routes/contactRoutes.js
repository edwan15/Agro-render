const express = require("express");
// const { contactUs } = require("../controllers/Contact");
const router = express.Router();
const protect = require("../middleware/authMiddle");

router.post("/", protect, contactUs);

module.exports = router;
