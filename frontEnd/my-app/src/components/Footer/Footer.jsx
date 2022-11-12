import { Box, Container, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react';
import PWS from '../Navbar/PWS.png';
import footStyle from './Footer.module.css';

export default function Footer() {
  return (
    <Box w="90%" margin="auto"  mt="20px" mb="50px">
      <Grid templateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(4,1fr)",lg:"repeat(6,1fr)"}} gap="40px">
        <Flex flexDirection="column" gap="20px">
          <Image src={PWS} h="30px" w="90px"></Image>
          <Flex className={footStyle.comp}>
            <Text>Pricing</Text>
            <Text>Contact us</Text>
            <Text>Templates</Text>
            <Text>SMB</Text>
            <Text>Enterprise</Text>
            <Text>Nonprofits</Text>
            <Text>Apps marketplace</Text>
            <Text>24/7 support</Text>
          </Flex>
        </Flex>
        <Flex className={footStyle.comp}>
          <Text fontWeight="600" fontSize="16">
            Features
          </Text>
          <Text>Docs</Text>
          <Text>Integration</Text>
          <Text>Automation</Text>
          <Text>Foiles</Text>
          <Text>Dashboard</Text>
          <Text>Kanban</Text>
          <Text>Gantt</Text>
        </Flex>
        <Flex className={footStyle.comp}>
          <Flex className={footStyle.comp} mb="20px">
            <Text fontWeight="600" fontSize="16">
              PWS Products
            </Text>
            <Text>PWS work management</Text>
            <Text>PWS sales CRM</Text>
            <Text>PWS marketer</Text>
            <Text>PWS projects</Text>
            <Text>PWS dev</Text>
          </Flex>
          <Flex className={footStyle.comp}>
            <Text fontWeight="600" fontSize="16">
              More by PWS.com
            </Text>
            <Text>Canvas</Text>
            <Text>WorkForms</Text>
          </Flex>
        </Flex>
        <Flex className={footStyle.comp}>
          <Text fontWeight="600" fontSize="16">
            Use cases
          </Text>
          <Text>Marketing</Text>
          <Text>Project management</Text>
          <Text>Sales</Text>
          <Text>HR</Text>
          <Text>IT</Text>
          <Text>Operations</Text>
          <Text>Construction</Text>
          <Text>Education</Text>
        </Flex>
        <Flex className={footStyle.comp}>
          <Text fontWeight="600" fontSize="16">
            Company
          </Text>
          <Text>About us</Text>
          <Text>Careers - We're hiring!</Text>
          <Text>PWS-U</Text>
          <Text>Press</Text>
          <Text>Customer stories</Text>
          <Text>Become a partner</Text>
          <Text>Sustainability & ESG</Text>
          <Text>Affiliates</Text>
          <Text>Digital Lift</Text>
          <Text>Investor relations</Text>
        </Flex>
        <Flex className={footStyle.comp}>
          <Text fontWeight="600" fontSize="16">
            Resources
          </Text>
          <Text>Help Center</Text>
          <Text>Community</Text>
          <Text>Blog</Text>
          <Text>Webinars</Text>
          <Text>Startup for startup</Text>
          <Text>Global events</Text>
          <Text>App development</Text>
          <Text>Find a partner</Text>
          <Text>Compare</Text>
        </Flex>
      </Grid>
      <Box h="2px" bg="gray" mt="20px"></Box>
      <Grid templateColumns={{base:"",sm:"",md:"",lg:"20% 80% "}} mt="30px" rowGap="20px">
        <Flex flexDirection="column" gap="20px">
            <Box>
                English
            </Box>
            <Flex>
                <Image boxSize="40px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/gdpr-logo.png"></Image>
                <Image boxSize="40px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/iso-logo1.png"></Image>
                <Image boxSize="40px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/soc-logo.png"></Image>
                <Image boxSize="40px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/hipaa-logo.png"></Image>
                
            </Flex>
        </Flex>
        <Flex flexDirection="column" gap="20px">
            <Flex gap="10px">
                <Image boxSize="25px" src="https://cdn-icons-png.flaticon.com/512/1384/1384019.png"></Image>
                <Image boxSize="25px" src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"></Image>
                <Image boxSize="25px" src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png"></Image>
                <Image boxSize="25px" src="https://cdn-icons-png.flaticon.com/128/1384/1384012.png"></Image>
                <Image boxSize="25px" src="https://cdn-icons-png.flaticon.com/128/733/733635.png"></Image>
                <Image boxSize="25px" src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"></Image>
                <Image boxSize="25px" src="https://cdn-icons-png.flaticon.com/512/3046/3046120.png"></Image>
            </Flex>
            <Flex >
                <Text>Security |</Text>
                <Text>Terms and privacy |</Text>
                <Text>Privacy policy |</Text>
                <Text>Status </Text>
                <Text>All rights Reserved PWS.com</Text>
            </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}
