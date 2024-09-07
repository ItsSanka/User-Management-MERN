const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoutes");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/users", router);

// MongoDB Connection
mongoose
  .connect("mongodb+srv://sanka:SJgnHgHTvDCMMxOR@mernapp.wafar.mongodb.net/")
  .then(() => console.log("Connected to MongoDb"))
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.log(err));

// Register Model
require("./Model/Register");
const User = mongoose.model("Register");

// Register Route
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send({ status: "ok" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "error", error: err.message });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });  // Corrected the query
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.password === password) {
      return res.send({ status: "ok" });
    } else {
      return res.status(401).json({ error: "Incorrect password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
