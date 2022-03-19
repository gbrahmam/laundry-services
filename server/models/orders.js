const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productType:{type:String,enum:["Shirts", "T-Shirts","Trousers","Jeans", "Boxers","Joggers","Others"], default:0}
    washType:{type:Image, }
})


mongoose.model("Orders",orderSchema)