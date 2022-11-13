
import { Box, Container } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
// 
export default function Homepage(){
   return(
    <Box w="100%"  >
      <Navbar/>
    <Home/>
    <Footer/>
</Box>
   )

}