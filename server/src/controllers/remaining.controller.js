const express = require("express")

const router = express.Router();

const Remaining = require("../models/remaining.model");


router.get("", async (req, res) => {
    const data = await Remaining.find({});
    return res.status(200).send(data)
})

router.post("", async (req, res) => {
    const data = await Remaining.create(req.body);
    return res.status(200).send(data)
})

router.get("/:id", async (req, res) => {
    const data = await Remaining.findById(req.params.id);
    return res.status(200).send(data)
})

router.patch("/:id", async (req, res) => {
    const data = await Remaining.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.status(200).send(data)
})

router.delete("/:id", async (req, res) => {
    const data = await Remaining.findByIdAndDelete(req.params.id);
    return res.status(200).send(data)
})

module.exports=router