const mongoose = require("mongoose");

// console.log(2);
//USER SCHEMA
const grocerySchema = new mongoose.Schema([{
    segment : {type:String,required: true},
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
const Grocery = mongoose.model("Grocery", grocerySchema);
module.exports=Grocery;
