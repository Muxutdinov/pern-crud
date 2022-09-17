const { Router } = require("express");
const pool = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  const data = await pool.query("SELECT *  FROM pern");
  res.json(data.rows);
});

module.exports = router;
