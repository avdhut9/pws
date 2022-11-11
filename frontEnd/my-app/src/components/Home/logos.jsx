import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
const breakpoints = {
    base:"repeat(2,1fr)",
    sm: "repeat(3,1fr)",
    md: "repeat(4,1fr)",
    lg: "repeat(5,1fr)",
    xl: "repeat(5,1fr)",
    '2xl': "repeat(5,1fr)",
  }
export default function Logos(){
    return(
        <Box bgColor="white" w="60%" m="auto" mb="10px">
            <Grid templateColumns={breakpoints} gap="20px" alignItems="center" justifyContent="center">
              
                <GridItem  m="auto">
                    <Box >
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png"/>
                    </Box>
                </GridItem  >
                <GridItem  m="auto">
                    <Box >
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png"/>
                    </Box>
                </GridItem>
                <GridItem    m="auto">
                    <Box>
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png"/>
                    </Box>
                </GridItem >
                <GridItem  m="auto">
                    <Box>
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png"/>
                    </Box>
                </GridItem>
                <GridItem  m="auto">
                    <Box >
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png"/> 
                    </Box>
                </GridItem>
                <GridItem  w="70%" m="auto">
                    <Box>
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png"/>
                    </Box>
                </GridItem>
                <GridItem   w="70%" m="auto">
                    <Box>
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png"/>
                    </Box>
                </GridItem>
                <GridItem   m="auto">
                    <Box >
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png"/>
                    </Box>
                </GridItem>
                <GridItem    m="auto">
                    <Box>
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png"/>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}