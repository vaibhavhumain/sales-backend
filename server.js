require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors({
  origin: [
    "https://salesdashboardgc.netlify.app",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
