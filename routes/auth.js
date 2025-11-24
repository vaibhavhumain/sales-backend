const express = require("express");
const router = express.Router();

const ADMIN_EMAIL = "admin@gobindcoach.com";
const ADMIN_PASSWORD = "Admin@GC2025";

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== ADMIN_EMAIL)
      return res.status(403).json({ error: "Access Denied: Invalid Email" });

    if (password !== ADMIN_PASSWORD)
      return res.status(403).json({ error: "Access Denied: Wrong Password" });

    res.json({
      message: "Login Success",
      user: {
        name: "Admin",
        email: ADMIN_EMAIL,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
