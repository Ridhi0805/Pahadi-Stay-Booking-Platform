const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Homestay = require("./models/Homestay");
const User = require("./models/User");
const protect = require("./authMiddleware");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "Pahadi Stay Backend is Running!" });
});


// GET All Homestays from MongoDB
app.get("/api/homestays", async (req, res) => {
  try {
    const homestays = await Homestay.find();

    res.status(200).json(homestays);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch homestays",
      error: error.message,
    });
  }
});

// CREATE a new homestay
app.post("/api/homestays", protect, async (req, res) => {
  try {
    const { name, location, price } = req.body;

    const newHomestay = new Homestay({
      name,
      location,
      price,
      user:req.userId,
    });

    const savedHomestay = await newHomestay.save();

    res.status(201).json(savedHomestay);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create homestay",
      error: error.message,
    });
  }
});
// UPDATE a homestay
app.put("/api/homestays/:id", protect, async (req, res) => {
  try {
    const { name, location, price } = req.body;

    const updatedHomestay = await Homestay.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.userId,
      },
      {
        name,
        location,
        price,
      },
      {
        new: true,
      }
    );

    if (!updatedHomestay) {
      return res.status(404).json({
        message: "Homestay not found",
      });
    }

    res.status(200).json(updatedHomestay);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update homestay",
      error: error.message,
    });
  }
});
// CREATE a new homestay
app.post("/api/homestays", protect, async (req, res) => {
  // ...
});


// UPDATE a homestay
app.put("/api/homestays/:id", protect, async (req, res) => {
  // ...
});


// DELETE a homestay  ← ADD THE NEW CODE HERE
app.delete("/api/homestays/:id", protect, async (req, res) => {
  try {
    const deletedHomestay = await Homestay.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!deletedHomestay) {
      return res.status(404).json({
        message: "Homestay not found",
      });
    }

    res.status(200).json({
      message: "Homestay deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete homestay",
      error: error.message,
    });
  }
});



// User Signup
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Signup failed",
      error: error.message,
    });
  }
});
// User Login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});