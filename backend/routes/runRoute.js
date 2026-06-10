const router = require("express").Router();

const {
  runCode,
} = require("../controllers/runController");

router.post("/run", runCode);

module.exports = router;