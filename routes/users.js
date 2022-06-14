const express = require('express');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

const router = express.Router();

// @route     POSt    api/auth
// @desc      Register user
// @access    Public
router.post('/', [
  check('name', 'Please add a name.').not().isEmpty(),
  check('email', 'Please enter a valid e-mail.').isEmail(),
  check(
    'password',
    'Please enter a password with at least 6 characters'
  ).isLength({ min: 6}),
], (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.send(req.body);
});

module.exports = router;
