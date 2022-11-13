

import { Image } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/Signup";
import Maintable from "../components/Table/Maintable";
// import Maintable from "../components/Table/Maintable";

import Homepage from "../pages/Home/homepage";
import Inb from "../pages/Product/productlandingpage/pro";
import ProductRout from "../pages/Product/Rout/ProductRout";


export default function AllRoutes(){
   return( 
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/workspace" element={<Maintable/>}/>
    <Route path="/product" element={<Inb/>}></Route>
    <Route path="*" element={<Image  m="auto" src="https://nccpindia.org/assets/image/error-404.png"/>}/>
    {/* <Route path="/workspace" element={<Maintable/>}></Route> */}
   </Routes>
   )
}

