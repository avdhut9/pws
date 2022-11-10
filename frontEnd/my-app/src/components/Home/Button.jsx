import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, VStack,Button } from "@chakra-ui/react";

export default function Buttonx(){
    return (
        <Box>
       <VStack>
       <Button bgColor="rgb(40, 98, 199)" _hover={{ opacity:0.8 } } p="25px 30px 25px 30px" borderRadius={25} color="white">Get Started <ArrowForwardIcon color="white"/></Button>
       </VStack>
    </Box>
    )
}