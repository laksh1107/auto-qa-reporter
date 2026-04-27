const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/qa-reporter");

// Schema
const Result = mongoose.model("Result", {
  url: String,
  status: String,
  responseTime: Number,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

// Test API
app.post("/api/test-url", async (req, res) => {
  const { url } = req.body;

  try {
    const start = Date.now();
    const response = await axios.get(url, {
  timeout: 5000,
  validateStatus: () => true
});
    const time = Date.now() - start;

    const data = await Result.create({
      url,
      status: response.status === 200 ? "PASS" : "FAIL",
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

// Get history
app.get("/api/results", async (req, res) => {
  const data = await Result.find().sort({ createdAt: -1 });
  res.json(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));