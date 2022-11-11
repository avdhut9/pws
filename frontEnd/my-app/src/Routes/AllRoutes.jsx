
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/Signup";
import Homepage from "../pages/Home/homepage";


export default function AllRoutes(){
   return( 
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
   </Routes>
   )

}