const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const apiRouter = require("./router/api");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
mongoose
  .connect("mongodb://127.0.0.1:27017/online-shop",)
  .then(() => {
    console.log("Successfully Connect DB..");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", apiRouter);
app.use("/uploads", express.static(path.join(__dirname, "/public/uploads")));
app.listen(process.env.PORT, () => {
  console.log(`Running On port :- ${process.env.PORT}`);
});
