const mongoose = require("mongoose");

// console.log(2);
//USER SCHEMA
const fruitSchema = new mongoose.Schema([{

    shop: { type: String, required: true },
    area: { type: String, required: true },
    distance: { type: String, required: true },
    icon_link: { type: String, required: true },
    
}],
    {
        versionKey: false,
        timestamps: true,
    }
);

//step-2:Creating the model
// it is class therefore U is capital
const Fruit = mongoose.model("Fruit", fruitSchema);
module.exports=Fruit;
