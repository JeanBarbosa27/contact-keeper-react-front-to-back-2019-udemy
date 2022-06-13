const express = require('express');

const router = express.Router();

// @route     GET    api/auth
// @desc      List users that are logged in
// @access    Private
router.get('/', (req, res) => {
  res.send('Get logged users')
});

// @route     POST    api/auth
// @desc      Authenticate and get the token
// @access    Public
router.post('/', (req, res) => {
  res.send('Log in user')
});

module.exports = router;
