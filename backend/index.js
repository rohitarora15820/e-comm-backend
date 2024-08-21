const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let result = await User.findOne(req.body).select("-password");
    if (result) {
      res.send(result);
    } else {
      res.send({ result: "User not found" });
    }
  } else {
    res.send({ result: "User not found" });
  }
});

app.listen(5000);
