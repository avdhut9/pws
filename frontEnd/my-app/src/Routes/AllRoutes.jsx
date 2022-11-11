import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/homepage";


export default function AllRoutes(){
   return( 
   <Routes>
    <Route path="/" element={<Homepage/>}/>
   </Routes>
   )
}
