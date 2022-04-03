const express = require("express");
const router = express.Router();

const Grocery=require("../models/grocery.models");

router.get("", async (req, res) => {
    try {
        const grocery = await Grocery.find().lean().exec();
        return res.status(200).send(grocery);
    } catch (err) {
        return res
            .status(500)
            .send({ message: "Something Went Wrong.. try again later" });
    }
});

router.post("", async (req, res) => {
    try {
        const grocery = await Grocery.create(req.body);
        return res.status(201).send(grocery);
    } catch (err) {
        return res
            .status(500)
            .send({ message: err.message });
    }
});



module.exports=router;