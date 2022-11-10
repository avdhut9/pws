import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
     <Container maxW="100%" p="0px">
      {/* <Navbar/> */}
        <AllRoutes/>
      {/* <Footer/> */}
     </ConTainer>
    </ChakraProvider>
  );
}

export default App;
