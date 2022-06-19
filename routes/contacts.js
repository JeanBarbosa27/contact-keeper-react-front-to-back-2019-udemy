const express = require("express");

const authMiddleware = require("../middlewares/auth");
const Contact = require("../models/Contact");
const User = require("../models/User");

const router = express.Router();

// @route     GET    api/contacts
// @desc      List all user contacts
// @access    Private
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.find({ email: req.user.email }).sort({ date: -1 });
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ msg: `Server error: ${error.message}` });
  }
});

// @route     POST    api/contacts
// @desc      Create a new contact
// @access    Private
router.post("/", (req, res) => {
  res.send("Create new contact");
});

// @route     PUT    api/contacts
// @desc      Update a contact for a given id
// @access    Private
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Update contact with id ${id}`);
});

// @route     DELETE    api/contacts
// @desc      Log in user
// @access    Private
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Remove contact with id ${id}`);
});

module.exports = router;
