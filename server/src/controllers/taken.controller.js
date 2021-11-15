const express = require("express");

const router = express.Router();

const Taken = require("../models/taken.model");

router.get("", async (req, res) => {
  const data = await Taken.find({});
  return res.status(200).send(data);
});

router.post("", async (req, res) => {
  const data = await Taken.create(req.body);
  return res.status(200).send(data);
});

router.get("/:id", async (req, res) => {
  const data = await Taken.findById(req.params.id);
  return res.status(200).send(data);
});

router.patch("/:id", async (req, res) => {
  const data = await Taken.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
    return res.status(200).send(data);
});

router.delete("/:id", async (req, res) => {
    const data = await Taken.findByIdAndDelete(req.params.id);
    return res.status(200).send(data)
})

module.exports=router