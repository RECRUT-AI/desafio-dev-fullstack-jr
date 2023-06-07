const express = require("express");
const cors = require("cors");
const petRoutes = require("./routes/petRoutes");
const donoRoutes = require("./routes/donoRoutes");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", async (_req, res) => {
  try {
    return res.status(200).json({ message: "API no Ar" });
  } catch (e) {
    return res.status(500).send(e);
  }
});

app.use("/pet", petRoutes);
app.use("/dono", donoRoutes);

module.exports = app;
