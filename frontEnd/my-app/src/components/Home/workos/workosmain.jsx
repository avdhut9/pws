import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Buttonx from "../Button";
const breakpoints={
    base:"column",
    sm: "column",
    md:"column",
    lg:"row" ,
    xl: "row",
    '2xl': "row",
}
const breakpoints1={
    base:"100%",
    sm: "100%",
    md:"100%",
    lg:"50%" ,
    xl: "50%",
    '2xl': "50%",
}
const breakpoints2 = {
    base:"25px",
    sm: "30px",
    md: "30px",
    lg: "35px",
    xl: "35px",
    '2xl': "30px",
  }
export default function Workflow(){
    return(
        <Box p="70px 30px 100px 30px">
            <Flex direction={breakpoints} gap="35px" >
                <Box m="auto" w={breakpoints1} pb="5px">
                    <Text  fontSize={breakpoints2}>The Work OS that lets you shape workflows your way</Text>
                </Box>
                <Box m="auto"  w={breakpoints1}>
                    <Text fontSize={20}>Boost your teams's alignment,effficiency,and productivity by customizing any workflow to fit your needs.</Text>
                   <VStack pt="20px" align="flex-start">
                   <Buttonx/>
                   </VStack>
                </Box>
            </Flex>
           
        </Box>
    )
}