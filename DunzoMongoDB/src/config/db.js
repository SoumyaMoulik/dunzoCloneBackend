const mongoose = require("mongoose");


const connect = () => {
    return mongoose.connect("mongodb+srv://abhishekbharti:1234@cluster0.ivlhy.mongodb.net/Cluster0?retryWrites=true&w=majority");
}


module.exports=connect;