const express = require("express");
const router = express.Router();

const Debts = require("../models/debts-model");

/* GET users listing. */
router.get("/", (req, res, next) => {
  Debts.find()
    .then((debts) => {
      res.status(200).json(debts);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error retrieving debts.",
      });
      console.error(err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Debts.findById(id)
    .then((debt) => {
      res.status(200).json(debt);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving the debt." });
      console.error(err);
    });
});

router.post("/", (req, res) => {
  const debt = req.body;
  Debts.add(debt)
    .then((id) => {
      [newDebtId] = id;
      return Debts.findById(newDebtId);
    })
    .then((debt) => {
      res.status(201).json({ message: "Successfully added the debt.", debt });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding the debt." });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updated = req.body;
  Debts.edit(id, updated)
    .then((updatedDebtId) => {
      return Debts.findById(updatedDebtId);
    })
    .then((updated) => {
      res.status(201).json(updated);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating the debt." });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Debts.remove(id)
    .then((deleted) => {
      res.status(200).json({ message: "Successfully removed the debt." });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error removing the debt." });
    });
});

module.exports = router;
