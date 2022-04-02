const express = require("express");
const app = express();

const Fruit=require("../models/fruits.model");

app.get("", async (req, res) => {
    try {
        const fruit = await Fruit.find().lean().exec();
        return res.status(200).send(fruit);
    } catch (err) {
        return res
            .status(500)
            .send({ message: "Something Went Wrong.. try again later" });
    }
});

app.post("", async (req, res) => {
    try {
        const fruit = await Fruit.create(req.body);
        return res.status(201).send(fruit);
    } catch (err) {
        return res
            .status(500)
            .send({ message: err.message });
    }
});



module.exports=app;