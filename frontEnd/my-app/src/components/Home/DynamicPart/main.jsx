import { Box, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Child from "./child";
const breakpoints3 = {
    base:"30px",
    sm: "35px",
    md: "40px",
    lg: "45px",
    xl: "50px",
    '2xl': "40px",
  }
  const breakpoint4={
    base:"16px",
    sm: "16px",
    md: "18px",
    lg: "20px",
    xl: "20px",
    '2xl': "16px",
  }
  const breakpoints= {
    base:"repeat(2,1fr)",
    sm: "repeat(3,1fr)",
    md: "repeat(5,1fr)",
    lg: "repeat(7,1fr)",
    xl: "repeat(7,1fr)",
    '2xl': "repeat(7,1fr)",
  }
export  default function Main(){
    const[state,setstate]=useState({src:"https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/7_status.mp4",Title:"Boards",text:"Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments."})
    function change(src,Title,text){
        console.log("ok")
setstate({
    ...state,src:src,Title:Title,text:text
})
    }
    return (
        <Box pt="50px" bgColor="#f9fcff" >
         <Box>
         <VStack mb="50px">
           <Text fontSize={breakpoints3} m="auto" textAlign="center">
            Everything you need for any workflow
            </Text>
            <Text textAlign="center" fontSize={breakpoint4}>Easily build your ideal workflow with monday.com building blocks.</Text>
           </VStack>
            <Box  w="90%" m="auto">
            <Grid pt="10px" pb="10px" boxShadow="xl" pr="100px" pl="100px" templateColumns={breakpoints} w="60%" m="auto" justifyContent="center"  gap="10px"  alignItems="center" bgColor="">
                <GridItem >
                    <Box onClick={()=>change("https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/7_status.mp4","Boards","Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.")} m="auto"  _hover={{ bg:"#f0f3ff",cursor:"pointer", color:"#77f" }}>
                    <Image m="auto" w="30px" src="https://img.icons8.com/ios-glyphs/2x/long.png"/>
                   <VStack>
                   <Text fontSize="14px" textAlign="center" >Board</Text>
                   </VStack>
                    </Box>
                </GridItem>
                <GridItem>
                <Box onClick={()=>change("https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/1_Views.mp4","Views","Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.")}  m="auto" _hover={{ bg:"#f0f3ff",cursor:"pointer",color:"#77f" }}>
                    <Image m="auto" w="30px" src="https://img.icons8.com/ios-glyphs/2x/view-column.png"/>
                   <VStack>
                   <Text fontSize="14px" textAlign="center">Views</Text>
                   </VStack>
                    </Box>
                </GridItem>
                <GridItem>
                <Box onClick={()=>change("https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/2_Dashboards.mp4","Dashboards","Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.")} m="auto" _hover={{ bg:"#f0f3ff",cursor:"pointer",color:"#77f" }}>
                    <Image m="auto" w="30px" src="https://img.icons8.com/ios-glyphs/2x/long.png"/>
                   <VStack>
                   <Text fontSize="14px" textAlign="center" >Dashboards</Text>
                   </VStack>
                    </Box>
                </GridItem>
                <GridItem>
                <Box onClick={()=>change("https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/4_Integrations.mp4","Integrations","Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.")}  m="auto" _hover={{ bg:"#f0f3ff",cursor:"pointer",color:"#77f" }}>
                    <Image m="auto" w="30px" src="https://img.icons8.com/ios-glyphs/2x/long.png"/>
                   <VStack>
                   <Text fontSize="14px" textAlign="center" >integrations</Text>
                   </VStack>
                    </Box>
                </GridItem>
                <GridItem>
                <Box onClick={()=>change("https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/3_Automations.mp4","Automations","Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.")} m="auto" _hover={{ bg:"#f0f3ff",cursor:"pointer",color:"#77f"}}>
                    <Image m="auto" w="30px" src="https://img.icons8.com/ios-glyphs/2x/long.png"/>
                   <VStack>
                   <Text fontSize="14px" textAlign="center" >Automations</Text>
                   </VStack>
                    </Box>
                </GridItem>
                <GridItem>
                <Box onClick={()=>change("https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/5_Apps.mp4","Apps","Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.")} m="auto" _hover={{ bg:"#f0f3ff",cursor:"pointer",color:"#77f" }}>
                    <Image m="auto" w="30px" src="https://img.icons8.com/ios-glyphs/2x/long.png"/>
                   <VStack>
                   <Text fontSize="14px" textAlign="center" >Apps</Text>
                   </VStack>
                    </Box>
                </GridItem>
                <GridItem>
                <Box onClick={()=>change("https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/6_Docs.mp4","Docs","Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.")}  m="auto" _hover={{ bg:"#f0f3ff",cursor:"pointer",color:"#77f" }}>
                    <Image m="auto" w="30px" src="https://img.icons8.com/ios-glyphs/2x/long.png"/>
                   <VStack>
                   <Text fontSize="14px" textAlign="center" >Docs</Text>
                   </VStack>
                    </Box>
                </GridItem>
            </Grid>
            </Box>
         </Box>
         <Child state={state}/>
        </Box>
    )
}