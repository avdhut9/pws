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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import AllRoutes from './Routes/AllRoutes';
import { Navigation } from './Product/Sidebar/Navigation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Navbar/> */}
        <AllRoutes/>
      
      {/* <Footer/> */}
    </ChakraProvider>
  );
}

export default App;
