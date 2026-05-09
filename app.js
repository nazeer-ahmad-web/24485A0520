const express = require("express");

const schedulerRoute = require("./routes/scheduler");

const app = express();

app.use(express.json());

app.use("/api", schedulerRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});