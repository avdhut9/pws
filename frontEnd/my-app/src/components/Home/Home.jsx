import { Box, Button, Checkbox, Container, Grid, GridItem, Heading, Image, Input, Text, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon} from '@chakra-ui/icons'
import Logos from "./logos";
import Buttonx from "./Button";
const breakpoints = {
    base:"repeat(3,1fr)",
    sm: "repeat(4,1fr)",
    md: "repeat(6,1fr)",
    lg: "repeat(7,1fr)",
    xl: "repeat(9,1fr)",
    '2xl': "repeat(9,1fr)",
  }
  const breakpoints1 = {
    base:"30px",
    sm: "35px",
    md: "45px",
    lg: "45px",
    xl: "65px",
    '2xl': "75px",
  }
 
export default function Home(){
   return(
    <Box w="100%">
        <Box  bgColor={"#0c0d44"}>
  <VStack m="auto" w="50%">  
<Box><Text  fontSize={breakpoints1}letterSpacing="2px" color="#dbdbe4" fontWeight="medium" textAlign="center" p="-20px" pt="50px">A Platform built for a new way of working</Text></Box>
    </VStack>
  <Box pt={5}>
  <VStack>
   <Text textAlign="center" margin="auto" fontSize="20px" color="white" w="70%" >
What would you like to manage with monday.com Work OS? 
</Text>
   </VStack>
  </Box>
    <Box p={50} w="96%" m="auto">
 <Grid templateColumns={breakpoints}   color="white" justifyContent="center" gap="12px">
    <GridItem>
        
            <Box  border="1px" p="5px" borderColor="#777794" borderRadius={7}  _hover={{ borderColor:"pink",cursor:"pointer" }} >
<Checkbox colorScheme='pink' iconColor="#0c0d44" borderColor="#777794" size='lg'/>
<Image w="35%" m="auto" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/marketing_icon.png"/>
<Text textAlign="center">Creative & design</Text>
        </Box>
       
    </GridItem>
    <GridItem>
        <Box border="1px" p="5px" borderColor="#777794" borderRadius={7} _hover={{ borderColor:"orange",cursor:"pointer" }}>
        <Checkbox colorScheme='orange' iconColor="#0c0d44" borderColor="#777794" size='lg'/>
        <Image w="35%" m="auto" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/pmo_icon.png"/>
<Text textAlign="center">Creative & design</Text>
        
        </Box>
    </GridItem>
    <GridItem>
        <Box border="1px" p="5px" borderColor="#777794" borderRadius={7} _hover={{ borderColor:"green.100",cursor:"pointer" }}>
        <Checkbox colorScheme="blue" iconColor="#0c0d44" borderColor="#777794" size='lg'/>
        <Image w="35%" m="auto" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/crm_icon.png"/>
<Text textAlign="center">Creative & design</Text>
         
        </Box>
    </GridItem>
    <GridItem>
        <Box border="1px" p="5px" borderColor="#777794" borderRadius={7} _hover={{ borderColor:"pink",cursor:"pointer" }}>
        <Checkbox colorScheme='pink' borderColor="#777794" iconColor="#0c0d44" size='lg'/>
        <Image w="35%" m="auto" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/hr_icon.png"/>
<Text textAlign="center">Creative & design</Text>
          
        </Box>
    </GridItem>
    <GridItem>
        <Box border="1px" p="5px" borderColor="#777794" borderRadius={7} _hover={{ borderColor:"blue",cursor:"pointer" }}>
        <Checkbox colorScheme='blue' iconColor="#0c0d44"  borderColor="#777794" size='lg'/>
        <Image w="35%" m="auto" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/task_icon.png"/>
<Text textAlign="center">Creative & design</Text>
           
        </Box>
    </GridItem>
    <GridItem>
        <Box border="1px" p="5px" borderColor="#777794" borderRadius={7} _hover={{ borderColor:"blue",cursor:"pointer" }}>
        <Checkbox colorScheme='blue' borderColor="#777794" iconColor="#0c0d44" size='lg'/>
        <Image w="35%" m="auto" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/operations_icon.png"/>
<Text textAlign="center">Creative & design</Text>
          
        </Box>
    </GridItem>
    <GridItem>
        <Box border="1px" p="5px" borderColor="#777794" borderRadius={7} _hover={{ borderColor:"pink",cursor:"pointer" }}>
        <Checkbox colorScheme='pink' borderColor="#777794" iconColor="#0c0d44" size='lg'/>
        <Image w="35%" m="auto" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/design_icon.png"/>
<Text textAlign="center">Creative & design</Text>
         
        </Box>
    </GridItem>
    <GridItem>
        <Box border="1px" p="5px" borderColor="#777794" borderRadius={7} _hover={{ borderColor:"blue",cursor:"pointer" }}> 
        <Checkbox colorScheme='blue' borderColor="#777794" iconColor="#0c0d44" size='lg'/>
        <Image w="35%" m="auto" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/workflows_icon.png"/>
<Text textAlign="center">Creative & design</Text>
            
        </Box>
    </GridItem>
    <GridItem>
        <Box border="1px" p="5px" borderColor="#777794" borderRadius={7} _hover={{ borderColor:"green",cursor:"pointer" }}>
        <Checkbox colorScheme='teal' borderColor="#777794" iconColor="#0c0d44" size='lg'/>
        <Image w="35%" m="auto" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/dev_icon.png"/>
<Text textAlign="center">Creative & design</Text>
            
        </Box>
    </GridItem>
 </Grid>
    </Box>
   <Buttonx/>
   <Text color="white" margin="auto" textAlign="center" p="20px">No credit card needed   ✦   Unlimited time on Free plan</Text>
 </Box>
 <Box>
    <Image alt="image" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/image.png" ></Image>
        
    </Box>
    <Box bgColor="white">
        <VStack p="20px"><Text textAlign="center" margin="auto" fontSize="21px" >Trusted by 152,000+ customers worldwide</Text></VStack>
    </Box>
    <Logos/>
    <Box >
        <Image src="https://iili.io/y2BUBa.jpg"/>
    </Box>
</Box>

   )
}
{/* <picture class="jsx-4212101279 picture-component star-picture"><img alt="marketing icon" class="jsx-4212101279 star-icon" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/marketing_icon.png"></picture> */}
{/* <div tabindex="0" role="checkbox" aria-checked="false" class="jsx-1026031917 square-tag-component selectable-cluster" style="color: rgb(255, 153, 0);"><div class="jsx-1026031917 background-circle"></div><div class="jsx-1026031917 checkbox"><svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><div class="jsx-1026031917 star-image"><picture class="jsx-4212101279 picture-component star-picture"><img alt="pmo icon" class="jsx-4212101279 star-icon" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/pmo_icon.png"></picture></div><div class="jsx-1026031917 star-text">Project management</div></div> */}
{/* <div tabindex="0" role="checkbox" aria-checked="false" class="jsx-1026031917 square-tag-component selectable-cluster" style="color: rgb(0, 210, 210);"><div class="jsx-1026031917 background-circle"></div><div class="jsx-1026031917 checkbox"><svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><div class="jsx-1026031917 star-image"><picture class="jsx-4212101279 picture-component star-picture"><img alt="crm icon" class="jsx-4212101279 star-icon" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/crm_icon.png"></picture></div><div class="jsx-1026031917 star-text">Sales &amp; CRM</div></div> */}
{/* <div tabindex="0" role="checkbox" aria-checked="false" class="jsx-1026031917 square-tag-component selectable-cluster" style="color: rgb(87, 155, 252);"><div class="jsx-1026031917 background-circle"></div><div class="jsx-1026031917 checkbox"><svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><div class="jsx-1026031917 star-image"><picture class="jsx-4212101279 picture-component star-picture"><img alt="task icon" class="jsx-4212101279 star-icon" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/task_icon.png"></picture></div><div class="jsx-1026031917 star-text">Task management</div></div> */}
{/* <div tabindex="0" role="checkbox" aria-checked="false" class="jsx-1026031917 square-tag-component selectable-cluster" style="color: rgb(255, 117, 117);"><div class="jsx-1026031917 background-circle"></div><div class="jsx-1026031917 checkbox"><svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><div class="jsx-1026031917 star-image"><picture class="jsx-4212101279 picture-component star-picture"><img alt="hr icon" class="jsx-4212101279 star-icon" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/hr_icon.png"></picture></div><div class="jsx-1026031917 star-text">HR</div></div> */}
{/* <div class="star-wrapper" style="width: 140px;"><div tabindex="0" role="checkbox" aria-checked="false" class="jsx-1026031917 square-tag-component selectable-cluster" style="color: rgb(78, 204, 198);"><div class="jsx-1026031917 background-circle"></div><div class="jsx-1026031917 checkbox"><svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><div class="jsx-1026031917 star-image"><picture class="jsx-4212101279 picture-component star-picture"><img alt="operations icon" class="jsx-4212101279 star-icon" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/operations_icon.png"></picture></div><div class="jsx-1026031917 star-text">Operations</div></div></div> */}
{/* <div class="star-wrapper" style="width: 140px;"><div tabindex="0" role="checkbox" aria-checked="false" class="jsx-1026031917 square-tag-component selectable-cluster" style="color: rgb(255, 21, 138);"><div class="jsx-1026031917 background-circle"></div><div class="jsx-1026031917 checkbox"><svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><div class="jsx-1026031917 star-image"><picture class="jsx-4212101279 picture-component star-picture"><img alt="design icon" class="jsx-4212101279 star-icon" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/design_icon.png"></picture></div><div class="jsx-1026031917 star-text">Creative &amp; design</div></div></div> */}
{/* <div class="star-wrapper" style="width: 140px;"><div tabindex="0" role="checkbox" aria-checked="false" class="jsx-1026031917 square-tag-component selectable-cluster" style="color: rgb(108, 108, 255);"><div class="jsx-1026031917 background-circle"></div><div class="jsx-1026031917 checkbox"><svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><div class="jsx-1026031917 star-image"><picture class="jsx-4212101279 picture-component star-picture"><img alt="workflows icon" class="jsx-4212101279 star-icon" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/workflows_icon.png"></picture></div><div class="jsx-1026031917 star-text">More workflows</div></div></div> */}
{/* <div class="star-wrapper" style="width: 140px;"><div tabindex="0" role="checkbox" aria-checked="false" class="jsx-1026031917 square-tag-component selectable-cluster" style="color: rgb(0, 200, 117);"><div class="jsx-1026031917 background-circle"></div><div class="jsx-1026031917 checkbox"><svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div><div class="jsx-1026031917 star-image"><picture class="jsx-4212101279 picture-component star-picture"><img alt="dev icon" class="jsx-4212101279 star-icon" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/first_fold/icons/dev_icon.png"></picture></div><div class="jsx-1026031917 star-text">Software development</div></div></div> */}
