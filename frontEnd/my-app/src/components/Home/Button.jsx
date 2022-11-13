
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, VStack,Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
export default function Buttonx(){
    const navigate=useNavigate()
    function ok(){
        navigate("/login")
    }
    return (
        <Box>
       <VStack>
       <Button onClick={ok} bgColor="rgb(40, 98, 199)" _hover={{ opacity:0.8 } } p="25px 30px 25px 30px" borderRadius={25} color="white">Get Started <ArrowForwardIcon color="white"/></Button>
       </VStack>
    </Box>
    )

}