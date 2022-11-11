import { Text,Flex,Box, Image } from "@chakra-ui/react";
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
    lg: "30px",
    xl: "30px",
    '2xl': "30px",
  }
  const breakpoints3 = {
    base:"20px",
    sm: "25px",
    md: "25px",
    lg: "25px",
    xl: "25px",
    '2xl': "25px",
  }
  const breakpoint4={
    base:"12px",
    sm: "14px",
    md: "16px",
    lg: "16px",
    xl: "16px",
    '2xl': "16px",
  }
  const breakpoint5={
    base:"100%",
    sm: "80%",
    md: "75%",
    lg: "70%",
    xl: "70%",
    '2xl': "70%",
  }
export default function Slider(){
    return(
        <Box p="30px" pt="100px" pb="100px" bgColor="#0c0d44" color="whiteAlpha.800">
           <Box>
           <Flex direction={breakpoints} gap="35px">
<Box w={breakpoints1}>
    <Text fontSize={breakpoints2}>
    Streamline your work for maximum productivity
    </Text>
    <Text pt="20px" fontSize={breakpoints3}>
    Centralize all your work, processes, tools, and files into one Work OS. Connect teams, bridge silos, and maintain one source of truth across your organization.
    </Text>
</Box>
<Box>
    <Image w={breakpoint5} m="auto" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/first_board.png"/>
</Box>
            </Flex>
           </Box>
           <Box mt="50px">
           <Flex direction={breakpoints} gap="35px">
<Box w={breakpoints1}>
    <Text fontSize={breakpoints2}>
    Bring teams together to drive business impact
    </Text>
    <Text pt="20px" fontSize={breakpoints3}>
    Collaborate effectively organization-wide to get a clear picture of all your work. Stay in the loop with easy-to-use automations and real-time notifications.
    </Text>
</Box>

<Box  >
    
  
<Box>
<Flex justifyContent="center" alignItems="center" gap="10px">
<Image w="60px" src="https://dapulse-res.cloudinary.com/image/upload/v1649149959/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/person1.png"/>
    <Text w="100%" fontSize={breakpoint4}>
@Marketing Team can <br/>
you update about project progress?|</Text>
</Flex>
</Box>
  
<Box mt="10px">
<Flex justifyContent="center" alignItems="center" gap="10px">
<Image w="60px"  src="https://dapulse-res.cloudinary.com/image/upload/v1649149959/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/person2.png"/>
    <Text w="100%" fontSize={breakpoint4}>

We're almost done,<br/>
@Samantha can you add the file?|</Text>
</Flex>
</Box>
  
<Box mt="10px">
<Flex justifyContent="center" alignItems="center" gap="10px">
<Image w="60px"  src="https://dapulse-res.cloudinary.com/image/upload/v1649149959/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/person3.png"/>
    <Text w="100%" fontSize={breakpoint4}>

    I have just uploaded it!|</Text>
</Flex>
</Box>
 
   
</Box>

            </Flex>
           </Box>
   
        </Box>
    )
}