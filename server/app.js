/******************** Constants ********************/
require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();
const URI = process.env.MONGODB_URI || "mongodb://localhost/fresh-tech";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    if (!module.parent)
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );
  })
  .catch((err) => console.error("Error connecting to mongo", err));

/******************** Middleware ********************/
// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:3000", "https://clientnetlify.netlify.app"],
//   })
// );
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(logger("dev"));

/******************** Routes ********************/

const taskRouter = require("./routes/task");
app.use("/", taskRouter);

/******************** Error Handling ********************/
app.use((req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

app.use((err, req, res, next) => {
  console.error("ERROR", req.method, req.path, err);
  if (!res.headersSent) {
    res.status(500).send({ msg: "Check the error on console" });
  }
});

if (!module.parent)
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.exports = app;
