const { Router } = require("express");
const path = require("path");
const user = require("../database/schemas/User");

const router = Router();

router.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/index");
  } else {
    res.sendFile(path.join(__dirname, "../templates/login.html"));
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDB = await user.findOne({ username: username });
  if (!userDB) {
    res.json({ success: false, message: "User Doesn't exist" });
  } else {
    if (userDB.password == password) {
      req.session.user = {
        username: username,
        password: password,
      };
      res.send({ success: true, message: "done" });
    } else {
      res.json({ success: false, message: "Invalid password" });
    }
  }
});

router.get("/register", (req, res) => {
  if (req.session.user) {
    res.redirect("/index");
  } else {
    res.sendFile(path.join(__dirname, "../templates/register.html"));
  }
});

router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  const userDB = await user.findOne({
    $or: [{ username: username }, { email: email }],
  });
  if (userDB) {
    console.log(username, password, email);
    console.log(userDB);
    res.json({ success: false, message: "User already exists" });
  } else {
    const newUser = await user.create({ username, password, email });
    res.json({ success: true, message: "done" });
  }
});

module.exports = router;
