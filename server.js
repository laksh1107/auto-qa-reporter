const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* ✅ MongoDB Connection with proper handling */
mongoose.connect("mongodb://mongo:27017/qa-reporter")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
/* ✅ Schema */
const ResultSchema = new mongoose.Schema({
  url: String,
  status: String,
  responseTime: Number,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Result = mongoose.model("Result", ResultSchema);

/* ✅ Health check route (IMPORTANT for browser) */
app.get("/", (req, res) => {
  res.send("QA Reporter is running 🚀");
});

/* ✅ Test API */
app.post("/api/test-url", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ message: "URL is required" });
  }

  try {
    const start = Date.now();

    const response = await axios.get(url, {
      timeout: 5000,
      validateStatus: () => true
    });

    const time = Date.now() - start;

    const data = await Result.create({
      url,
      status: response.status >= 200 && response.status < 400 ? "PASS" : "FAIL",
      responseTime: time,
      message: "Working"
    });

    res.json(data);

  } catch (err) {

    const data = await Result.create({
      url,
      status: "FAIL",
      responseTime: err.response ? err.response.status : 0,
      message: err.message
    });

    res.json(data);
  }
});

/* ✅ Get history */
app.get("/api/results", async (req, res) => {
  const data = await Result.find().sort({ createdAt: -1 });
  res.json(data);
});

/* ✅ Start server */
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});