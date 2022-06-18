const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

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
], async (req, res) => {
  // Validator
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Validator/

  const { name, email, password } = req.body;

  try {
    // User Repository
    let user = await User.find({ email });

    if (!user) {
      return res.status(400).json(
        { errors: [{
          param: 'email',
          msg: `User with email ${email} already exists.`
        }]}
      )
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    // User Repository/

    // JWT Handler Service
    const jwtPayload = {
      user: {
        id: user.id
      }
    }
    const jwtOptions = { expiresIn: 360000 }
    const jwtCallback = (error, token) => {
      if(error) throw error;
      res.json({ token });
    }

    jwt.sign(
      jwtPayload,
      config.get('jwtSecret'),
      jwtOptions,
      jwtCallback
    );
    // JWT Handler Service/
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ errors: [{ param: 'catch', msg: 'Server error' }]})
  }
});

module.exports = router;
