

import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/Signup";
// import Maintable from "../components/Table/Maintable";

import Homepage from "../pages/Home/homepage";
import ProductRout from "../pages/Product/Rout/ProductRout";


export default function AllRoutes(){
   return( 
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/product" element={<ProductRout/>}></Route>
    {/* <Route path="/workspace" element={<Maintable/>}></Route> */}

   </Routes>
   )

}

