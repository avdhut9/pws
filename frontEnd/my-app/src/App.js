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
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import AllRoutes from './Routes/AllRoutes';

import Maintable from './components/Table/Maintable';

// import { Navigation } from './Product/Sidebar/Navigation';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ChakraProvider >
      <Container maxW="100%" p="0px">
        {/* <Navbar /> */}
        <AllRoutes />
        {/* <Footer /> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
// <div class="jsx-2017379735 spin-container"><div id="twinkling-stars" class="jsx-2017379735"></div><div class="jsx-2017379735 circle-container small-circle"></div><div class="jsx-2017379735 items-container small-circle"><div class="jsx-2017379735 item gmail"><img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/gmail.svg" alt="gmail integration icon" class="jsx-2017379735"></div><div class="jsx-2017379735 item linkedin"><img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/linkedin.svg" alt="linkedin integration icon" class="jsx-2017379735"></div><div class="jsx-2017379735 item harvest"><img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/harvest.svg" alt="harvest integration icon" class="jsx-2017379735 system__icon system__icon--sun"></div></div><div class="jsx-2017379735 circle-container medium-circle"></div><div class="jsx-2017379735 items-container medium-circle"><div class="jsx-2017379735 item item-inner zoom"><img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/zoom.svg" alt="zoom integration icon" class="jsx-2017379735"></div><div class="jsx-2017379735 item item-outer facebook-ads"><img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/facebook_ads.svg" alt="facebook-ads integration icon" class="jsx-2017379735"></div></div><div class="jsx-2017379735 circle-container large-circle"></div><div class="jsx-2017379735 items-container large-circle"><div class="jsx-2017379735 item mailchimp"><img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/mailchimp.svg" alt="mailchimp integration icon" class="jsx-2017379735"></div><div class="jsx-2017379735 item jira"><img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/jira.svg" alt="jira integration icon" class="jsx-2017379735"></div><div class="jsx-2017379735 item salesforce"><img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/salesforce.svg" alt="salesforce integration icon" class="jsx-2017379735"></div><div class="jsx-2017379735 item jotform"><img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/jotform.svg" alt="jotform integration icon" class="jsx-2017379735"></div><div class="jsx-2017379735 item dropbox"><img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/dropbox.svg" alt="dropbox integration icon" class="jsx-2017379735"></div></div></div>
