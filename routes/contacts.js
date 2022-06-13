const express = require('express');

const router = express.Router();

// @route     GET    api/contacts
// @desc      List all user contacts
// @access    Private
router.get('/', (req, res) => {
  res.send("Get user's contacts")
});

// @route     POST    api/contacts
// @desc      Create a new contact
// @access    Private
router.post('/', (req, res) => {
  res.send('Create new contact')
});

// @route     PUT    api/contacts
// @desc      Update a contact for a given id
// @access    Private
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Update contact with id ${id}`)
});

// @route     DELETE    api/contacts
// @desc      Log in user
// @access    Private
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Remove contact with id ${id}`)
});

module.exports = router;
