const { Router } = require("express");
const pool = require("../db");
const router = Router();

//POST
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    if (title.length > 1) {
      await pool.query("INSERT INTO pern (title) VALUES($1)", [title]);
      return res.status(200).json(title);
    }
    return res.json({ message: "Task yozing!" });
  } catch (error) {
    console.log(error.message);
  }
});

//GET ALL TODO
router.get("/", async (req, res) => {
  const data = await pool.query("SELECT *  FROM pern");
  res.json(data.rows);
});

//GET ONE TODO BY ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getdata = await pool.query("SELECT * FROM pern WHERE id = $1", [id]);
    if (getdata) {
      return res.json(getdata.rows[0]);
    }
    return res.json({ message: `Bu ${id} lik todo topilmadi!` });
  } catch (error) {
    console.log(error.message);
  }
});

//UPDATE TODO
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const oldData = await pool.query("SELECT * FROM pern WHERE id = $1", [id]);
    const allData = await pool.query("SELECT * FROM pern");
    let dataRight = false;
    if(!title){
      return res
      .status(400)
      .json({ message: `Title is required` });
    }
    allData.rows.map((value) => {
      if (value.id === id) {
        dataRight = true;
      }
    });
    if (dataRight === true) {
      const update = await pool.query(
        "UPDATE pern SET title = $1 WHERE id = $2",
        [title ? title : oldData.rows[0].title, id]
      );
      return res
        .status(201)
        .json({ message: `Title was updated! with id: ${id}` });
    }
    return res.status(404).json({ message: `Bu id:${id} lik data topilmadi!` });
  } catch (error) {
    console.log(error.message);
  }
});

//DELETE TODO
router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM pern WHERE id = $1", [req.params.id]);
    res
      .status(200)
      .json({ message: `Todo was deleted with id: ${req.params.id}` });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
