import { AspectRatio, Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
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
    sm: "90%",
    md:"70%",
    lg:"60%" ,
    xl: "60%",
    '2xl': "60%",
}
const breakpoints2 = {
    base:"25px",
    sm: "30px",
    md: "30px",
    lg: "30px",
    xl: "30px",
    '2xl': "30px",
  }
  const breakpoints3 = {
    base:"20px",
    sm: "25px",
    md: "25px",
    lg: "30px",
    xl: "30px",
    '2xl': "30px",
  }
  const breakpoint4={
    base:"18px",
    sm: "20px",
    md: "20px",
    lg: "22px",
    xl: "22px",
    '2xl': "25px",
  }
  const breakpoint5={
    base:"100%",
    sm: "80%",
    md: "75%",
    lg: "70%",
    xl: "70%",
    '2xl': "70%",
  }
  
export default function Child({state}){
    return(
        <Flex p="10%" gap="50px" direction={breakpoints}>
            <Box w={breakpoints1} border="1px">
         {/* <Image src={state.src}/> */}
         <AspectRatio >
  <iframe
    title='naruto'
    src={state.src}

  />
</AspectRatio>


            </Box>
            <VStack w={breakpoints1}align="flex-start">

<Text color="#77f" fontSize={breakpoints3}>{state.Title}</Text>
<Text color="gray" fontSize={breakpoint4}>{state.text}</Text>

            </VStack>
        </Flex>
    )
}
{/* <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/7_status.mp4"></source> */}
