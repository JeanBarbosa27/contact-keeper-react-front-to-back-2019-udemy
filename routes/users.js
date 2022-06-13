const express = require('express');

const router = express.Router();

// @route     POSt    api/auth
// @desc      Register user
// @access    Public
router.post('/', (req, res) => {
  res.send('Register user')
});

module.exports = router;
