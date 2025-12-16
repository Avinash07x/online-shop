const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();

const app = express();
const apiRouter = require("./router/api");
const { act } = require("react");
const { error } = require("console");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

// Routes
app.use("/api", apiRouter);
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.get("/", (req, res) => {
  res.send({
    active: "true",
    message: "Server is running",
    error: "false",
  });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
