const mongoose = require("mongoose");

// Schema :Information about structure of Data
// console.log(mongoose)
const ProductSchema= new mongoose.Schema({
    id:Number,
    name:{type:String, required:true},
    lname:{type:String, required:true},
    email: String,
    gender:{type:String, required:true, enum:["Male", "Female"]},
    age:{type:Number, required:true, min:20 ,max:40},
})

// model:instance of the collection
                            //👇 it should be always in singular form
const Product =mongoose.model("product",ProductSchema);  //it return a promise


module.exports =Product;