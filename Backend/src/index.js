 
const express = require("express");
const connect=require("./config/db");
const userController=require("./controllers/grocery.controller");
const cors = require("cors");
const fruitController = require("./controllers/fruit.controller")
const app = express();
app.use(express.json()); // convert req.body in json to Javascript Object
// console.log(1);
app.use(cors());
app.use("/grocery",userController);
app.use("/fruit",fruitController);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, async () => {
    try {
        await connect();

    } catch (err) {
        console.log(err);
    }
    console.log("Listening on port 5000");
});


