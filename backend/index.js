const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api",
  require("./routes/runRoute")
);

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});