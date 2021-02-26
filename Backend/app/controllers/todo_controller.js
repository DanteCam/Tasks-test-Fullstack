const Todo = require("../models/todo");
const express = require("express");
const router = express.Router();

router.get("/todos", (req, res) => {
  Todo.getAll((err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.post("/todos", (req, res) => {
  Todo.add(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const todoInserted = data.insertId;
      Todo.getOne(todoInserted, (err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(data[0]);
        }
      });
    }
  });
});

router.put("/todos", (req, res) => {
  Todo.update(req.body, (err, data) => {
    if (err) throw err;
    else {
      Todo.getOne(req.body.id, (err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(data[0]);
        }
      });
    }
  });
});

router.delete("/todos", (req, res) => {
  Todo.delete(req.body.id, (err, data) => {
    if (err) throw err;
    else {
      res.json(data);
    }
  });
});

module.exports = router;
