const router = require("express").Router();
const Task = require("../models/Task");

router.get("/test", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.get("/tasks", async (req, res, next) => {
  let dbRes = await Task.find({});
  res.status(200).json({ tasks: dbRes });
});

router.post("/seed", async (req, res, next) => {
  const tasks = [...Array(5)].map((el, i) => {
    return {
      title: `tittle ${String(i).padStart(3, "0")}`,
      body: `task ${String(i).padStart(3, "0")}`,
    };
  });
  let dbRes = await Task.insertMany(tasks);
  res.status(200).json({ dbRes });
});

router.post("/drop-db", async (req, res, next) => {
  let dbRes = await Task.deleteMany({});
  res.status(200).json({ dbRes });
});

module.exports = router;
