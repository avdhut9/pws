const express=require("express");
const cors=require("cors");

const PORT=8050;
const connect=require("./product/product.route");
const productRoute=require("./product/product.route");

const app=express();
app.use(express.json());
app.use(cors());
app.use("/products",productRoute);


app.listen(PORT,()=>{
    console.log("Listening to port 8050")
})