const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");

const authMiddleware = require("../middlewares/auth");

const router = express.Router();

// @route     GET    api/auth
// @desc      List users that are logged in
// @access    Private
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ msg: `Server error: ${error.message}` });
  }
});

// @route     POST    api/auth
// @desc      Authenticate and get the token
// @access    Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with at least 6 characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    // TODO: Encapsulate this as a validator middleware
    const errors = validationResult(req.body);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          errors: [
            { param: "email", msg: "Invalid credentials" },
            { param: "password", msg: "Invalid credentials" },
          ],
        });
      }

      const passwordMatched = await bcrypt.compare(password, user.password);

      if (!passwordMatched) {
        return res.status(400).json({
          errors: [
            { param: "email", msg: "Invalid credentials" },
            { param: "password", msg: "Invalid credentials" },
          ],
        });
      }

      // TODO: Encapsulate it as JWT Service
      const jwtPayload = {
        user: {
          id: user.id,
        },
      };

      const jswtOptions = {
        expiresIn: 360000,
      };

      const jwtCallback = (error, token) => {
        if (error) throw error;
        return res.status(200).json({ token });
      };

      jwt.sign(jwtPayload, config.get("jwtSecret"), jswtOptions, jwtCallback);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

module.exports = router;
