const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoutes");
const cors = require("cors");
const multer = require("multer"); // Consistent use of multer
const path = require("path");
const fs = require("fs");

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
    const user = await User.findOne({ email });
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

// Gallery
require("./Model/imgModel");
const ImgSchema = mongoose.model("ImgModel");

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, "public/uploads");
    
    // Create the directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Upload Image Route
app.post("/uploadImg", upload.single("image"), async (req, res) => {
  const imageName = req.file.filename;

  try {
    await ImgSchema.create({ image: imageName }); // 'image' should be lowercase
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
});

// Get Images Route
app.get("/getImage", async (req, res) => {
  try {
    const images = await ImgSchema.find({});
    res.send({ status: "ok", data: images });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
});

// Serve static files from uploads folder
app.use("/files", express.static(path.join(__dirname, "public/uploads")));
