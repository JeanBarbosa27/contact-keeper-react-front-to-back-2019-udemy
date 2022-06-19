const express = require("express");
const { check, validationResult } = require("express-validator");

const authMiddleware = require("../middlewares/auth");
const Contact = require("../models/Contact");

const router = express.Router();

// @route     GET    api/contacts
// @desc      List all user contacts
// @access    Private
router.get("/", authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    return res.status(200).json(contacts);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ msg: `Server error: ${error.message}` });
  }
});

// @route     POST    api/contacts
// @desc      Create a new contact
// @access    Private
router.post(
  "/",
  [authMiddleware, [check("name", "Please add a name")]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      return res.status(201).json(contact);
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ msg: `Server error: ${error.message}` });
    }
  }
);

// @route     PUT    api/contacts
// @desc      Update a contact for a given id
// @access    Private
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    let contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        msg: `There isn't a contact with id of ${id}!`,
      });
    }

    if (contact.user.toString() !== req.user.id) {
      return res.status(403).json({
        msg: "It's forbiden update a contact that isn't yours!",
      });
    }

    contact = await Contact.findByIdAndUpdate(
      id,
      { $set: { ...req.body } },
      { new: true }
    );

    return res
      .status(202)
      .json({ msg: "Contact successfully updated", contact });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ msg: `Server error: ${error.message}` });
  }
});

// @route     DELETE    api/contacts
// @desc      Log in user
// @access    Private
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Remove contact with id ${id}`);
});

module.exports = router;
