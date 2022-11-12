import {
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import navStyle from './Navbar.module.css';
import PWS from './PWS.png';
import {
  ChevronDownIcon,
  ArrowForwardIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import { AuthContext } from '../../contextapi/Authentication/Authentication';
import { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

export default function Navbar() {
  const { auth, firstname, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log(auth);
    if (!auth) {
      navigate('/signup');
    } else {
      setAuth(false);
      navigate('/');
    }
  };

  const HomePage = () => {
    navigate('/');
  };
  const handleProductPage = () => {
    if (auth) {
      navigate('/product');
    } else {
      navigate('/signup');
    }
  };

  return (
    <Box className={navStyle.main}>
      <Grid
        h="100%"
        templateColumns={{
          base: '30% 20%',
          sm: '20% 20%',
          md: '20% 20%',
          lg: '17% 50% 33%',
        }}
        alignItems="center"
        // gap={{}}
      >
        <Box onClick={HomePage}>
          {/* <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="jsx-1475715785 menu-item-title-icon fill"
            
          >
            <path
              d="M16.367 52.545c-2.709-1.847-3.367-5.482-1.47-8.12l16.007-22.259c1.172-1.63 3.045-2.497 4.945-2.486 1.896-.008 3.766.86 4.936 2.486l16.012 22.266c1.896 2.637 1.238 6.272-1.47 8.119-2.71 1.846-6.442 1.205-8.339-1.432L35.844 35.623l-11.139 15.49c-1.896 2.637-5.63 3.278-8.338 1.432z"
              fill="#6C6CFF"
            ></path>
            <path
              d="M16.372 18.724c-2.709 1.847-3.367 5.482-1.47 8.119l16 22.25c1.168 1.624 3.032 2.49 4.925 2.486 1.904.015 3.783-.853 4.958-2.486l16-22.25c1.897-2.637 1.239-6.272-1.47-8.119-2.709-1.847-6.442-1.206-8.338 1.432L35.843 35.637 24.71 20.156c-1.897-2.638-5.63-3.279-8.338-1.432z"
              fill="url(#paint0_linear_2108_574604)"
            ></path>
            <path
              d="M28.532 25.47l-7.31 10.163 7.31 10.164 7.31-10.164-7.31-10.164z"
              fill="#7E7EFF"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_2108_574604"
                x1="39.285"
                y1="34.624"
                x2="37.456"
                y2="52.175"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#8F8FFF"></stop>
                <stop offset="1" stop-color="#BABAFD"></stop>
              </linearGradient>
            </defs>
          </svg> */}
          <Image
            src={PWS}
            h="60px"
            w="200px"
            //   border="1px solid red"
            margin="auto"
          />
        </Box>
        {/* <Hide below="lg"> */}
        <Flex
          // border="1px solid green"
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}
        >
          <Menu>
            <MenuButton
              className={navStyle.button}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
              fontWeight="350"
            >
              Products
            </MenuButton>
            <MenuList w={{ base: '', sm: '80vw', md: '90vw' }} p="20px 8%">
              <Box>
                <Text mb="20px" fontSize="20px" fontWeight="700">
                  PWS products
                </Text>
                <Grid templateColumns="repeat(2,1fr)" rowGap="50px">
                  <Flex onClick={handleProductPage}>
                    <Image></Image>
                    <Box>
                      <Text className={navStyle.product_title}>
                        PWS work management
                      </Text>
                      <Text className={navStyle.product_desc}>
                        For managing any project,task, and workflow
                      </Text>
                      <Flex gap="5px">
                        <Text
                          bg="#f1f1ff"
                          color="#6d57ff"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Project & task management
                        </Text>
                        <Text
                          bg="#f1f1ff"
                          color="#6d57ff"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Operation
                        </Text>
                        <Text
                          bg="#f1f1ff"
                          color="#6d57ff"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Built your own
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Flex>
                    <Image></Image>
                    <Box>
                      <Text className={navStyle.product_title}>
                        PWS marketer
                      </Text>
                      <Text className={navStyle.product_desc}>
                        For marketing and creative teams
                      </Text>
                      <Flex gap="5px">
                        <Text
                          bg="#fef0f7"
                          color="#c16090"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Content calender
                        </Text>
                        <Text
                          bg="#fef0f7"
                          color="#c16090"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Marketing strategy
                        </Text>
                        <Text
                          bg="#fef0f7"
                          color="#c16090"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Creative requests
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Flex>
                    <Image></Image>
                    <Box>
                      <Text className={navStyle.product_title}>
                        PWS sales CRM
                      </Text>
                      <Text className={navStyle.product_desc}>
                        For sales and customer-facing teams
                      </Text>
                      <Flex gap="5px">
                        <Text
                          bg="#d6f8f8"
                          color="#397d7d"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Contact management
                        </Text>
                        <Text
                          bg="#d6f8f8"
                          color="#397d7d"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Sales pipeline
                        </Text>
                        <Text
                          bg="#d6f8f8"
                          color="#397d7d"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Lead management
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Flex>
                    <Image></Image>
                    <Box>
                      <Text className={navStyle.product_title}>
                        PWS projects
                      </Text>
                      <Text className={navStyle.product_desc}>
                        For PMO teams and projects managers
                      </Text>
                      <Flex gap="5px">
                        <Text
                          bg="#fff7eb"
                          color="#d38a53"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Advanced projects
                        </Text>
                        <Text
                          bg="#fff7eb"
                          color="#d38a53"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Portfolio management
                        </Text>
                        <Text
                          bg="#fff7eb"
                          color="#d38a53"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Critical path
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <Flex>
                    <Image></Image>
                    <Box>
                      <Text className={navStyle.product_title}>PWS dev</Text>
                      <Text className={navStyle.product_desc}>
                        For development and product teams
                      </Text>
                      <Flex gap="5px">
                        <Text
                          bg="#ebfbf4"
                          color="#236f45"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Roadmap planning
                        </Text>
                        <Text
                          bg="#ebfbf4"
                          color="#236f45"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Bug tracking
                        </Text>
                        <Text
                          bg="#ebfbf4"
                          color="#236f45"
                          p="0px 8px"
                          fontSize="12px"
                          fontWeight="semibold"
                        >
                          Scrum & Kanban
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Grid>
              </Box>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
              fontWeight="350"
            >
              Use cases
            </MenuButton>
            {/* <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList> */}
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
              fontWeight="350"
            >
              Features
            </MenuButton>
            {/* <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList> */}
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
              fontWeight="350"
            >
              Resources
            </MenuButton>
            {/* <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList> */}
          </Menu>
        </Flex>
        {/* </Hide> */}
        <Flex
          //  border="1px solid red"
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}
        >
          <Button variant="ghost" fontWeight="350">
            Pricing
          </Button>
          <Button variant="ghost" fontWeight="350">
            Contact sales
          </Button>
          <Button variant="ghost" fontWeight="350" onClick={handleLogin}>
            {auth ? 'Logout' : 'Login/Signup'}
          </Button>
          <Button
            bg="#6c6cff"
            borderRadius="50"
            fontWeight="350"
            color="white"
            rightIcon={<ArrowForwardIcon />}
          >
            Get Started
          </Button>
        </Flex>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            display={{ base: 'block', sm: 'block', md: 'block', lg: 'none' }}
          />
          <MenuList>
            <MenuItem>
              <Menu>
                <MenuButton
                  className={navStyle.button}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  variant="ghost"
                  fontWeight="350"
                >
                  Products
                </MenuButton>
                <MenuList
                  w={{ base: '50vw', sm: '80vw', md: '90vw' }}
                  p="20px 8%"
                >
                  <Box>
                    <Text mb="20px" fontSize="20px" fontWeight="700">
                      PWS products
                    </Text>
                    <Grid templateColumns="repeat(1,1fr)" rowGap="50px">
                      <Flex onClick={handleProductPage}>
                        <Image></Image>
                        <Box>
                          <Text className={navStyle.product_title}>
                            PWS work management
                          </Text>
                          <Text className={navStyle.product_desc}>
                            For managing any project,task, and workflow
                          </Text>
                          <Flex gap="5px">
                            <Text
                              bg="#f1f1ff"
                              color="#6d57ff"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Project & task management
                            </Text>
                            <Text
                              bg="#f1f1ff"
                              color="#6d57ff"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Operation
                            </Text>
                            <Text
                              bg="#f1f1ff"
                              color="#6d57ff"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Built your own
                            </Text>
                          </Flex>
                        </Box>
                      </Flex>
                      <Flex>
                        <Image></Image>
                        <Box>
                          <Text className={navStyle.product_title}>
                            PWS marketer
                          </Text>
                          <Text className={navStyle.product_desc}>
                            For marketing and creative teams
                          </Text>
                          <Flex gap="5px">
                            <Text
                              bg="#fef0f7"
                              color="#c16090"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Content calender
                            </Text>
                            <Text
                              bg="#fef0f7"
                              color="#c16090"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Marketing strategy
                            </Text>
                            <Text
                              bg="#fef0f7"
                              color="#c16090"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Creative requests
                            </Text>
                          </Flex>
                        </Box>
                      </Flex>
                      <Flex>
                        <Image></Image>
                        <Box>
                          <Text className={navStyle.product_title}>
                            PWS sales CRM
                          </Text>
                          <Text className={navStyle.product_desc}>
                            For sales and customer-facing teams
                          </Text>
                          <Flex gap="5px">
                            <Text
                              bg="#d6f8f8"
                              color="#397d7d"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Contact management
                            </Text>
                            <Text
                              bg="#d6f8f8"
                              color="#397d7d"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Sales pipeline
                            </Text>
                            <Text
                              bg="#d6f8f8"
                              color="#397d7d"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Lead management
                            </Text>
                          </Flex>
                        </Box>
                      </Flex>
                      <Flex>
                        <Image></Image>
                        <Box>
                          <Text className={navStyle.product_title}>
                            PWS projects
                          </Text>
                          <Text className={navStyle.product_desc}>
                            For PMO teams and projects managers
                          </Text>
                          <Flex gap="5px">
                            <Text
                              bg="#fff7eb"
                              color="#d38a53"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Advanced projects
                            </Text>
                            <Text
                              bg="#fff7eb"
                              color="#d38a53"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Portfolio management
                            </Text>
                            <Text
                              bg="#fff7eb"
                              color="#d38a53"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Critical path
                            </Text>
                          </Flex>
                        </Box>
                      </Flex>
                      <Flex>
                        <Image></Image>
                        <Box>
                          <Text className={navStyle.product_title}>
                            PWS dev
                          </Text>
                          <Text className={navStyle.product_desc}>
                            For development and product teams
                          </Text>
                          <Flex gap="5px">
                            <Text
                              bg="#ebfbf4"
                              color="#236f45"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Roadmap planning
                            </Text>
                            <Text
                              bg="#ebfbf4"
                              color="#236f45"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Bug tracking
                            </Text>
                            <Text
                              bg="#ebfbf4"
                              color="#236f45"
                              p="0px 8px"
                              fontSize="12px"
                              fontWeight="semibold"
                            >
                              Scrum & Kanban
                            </Text>
                          </Flex>
                        </Box>
                      </Flex>
                    </Grid>
                  </Box>
                </MenuList>
              </Menu>
            </MenuItem>

            <MenuItem>
              <Menu>
                <MenuButton
                  className={navStyle.button}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Features
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </MenuItem>

            <MenuItem>Open </MenuItem>
            <MenuItem>Open File...</MenuItem>
          </MenuList>
        </Menu>
      </Grid>
    </Box>
  );
}
