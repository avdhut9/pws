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
  const { auth, firstName, setAuth } = useContext(AuthContext);
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
          lg: '17% 45% 38%',
        }}
        alignItems="center"
        justifyContent={{ base: 'space-between' }}
      >
        <Box onClick={HomePage}>
          <Image
            src={PWS}
            h="60px"
            w="200px"
            //   border="1px solid red"
            margin="auto"
          />
        </Box>
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
                    {/* <Image></Image> */}
                    <svg
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
                    </svg>
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
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.518 33.545V51.31c0 .46.373.834.834.834h9.296c.46 0 .834-.373.834-.834V35.141a3.026 3.026 0 0 1 3.027-3.025 3.026 3.026 0 0 1 3.027 3.025V51.31c0 .46.373.834.834.834h9.296c.46 0 .834-.373.834-.834V33.545c0-7.343-6.264-13.295-13.991-13.295-7.727 0-13.99 5.953-13.99 13.295z"
                        fill="#CA0C6B"
                      ></path>
                      <path
                        d="M13.5 33.545V51.31c0 .46.373.834.834.834h9.296c.46 0 .834-.373.834-.834V35.141a3.026 3.026 0 0 1 3.027-3.025 3.026 3.026 0 0 1 3.027 3.025V51.31c0 .46.373.834.834.834h9.296c.46 0 .834-.373.834-.834V33.545c0-7.343-6.264-13.295-13.991-13.295-7.727 0-13.991 5.953-13.991 13.295z"
                        fill="url(#paint0_linear_1371_406872)"
                      ></path>
                      <path
                        d="M13.5 41.898h10.962v9.275a.97.97 0 0 1-.97.97h-9.02a.97.97 0 0 1-.972-.97v-9.276zM30.52 41.898h10.962v9.275a.97.97 0 0 1-.971.97h-9.02a.97.97 0 0 1-.971-.97v-9.276zM47.54 41.898H58.5v9.275a.97.97 0 0 1-.97.97h-9.02a.97.97 0 0 1-.972-.97v-9.276z"
                        fill="#F8C3DD"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1371_406872"
                          x1="12.588"
                          y1="49.885"
                          x2="58.099"
                          y2="44.038"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF158A"></stop>
                          <stop
                            offset=".766"
                            stop-color="#FF158A"
                            stop-opacity=".5"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
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
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M44.957 34.957c.047.664-.495 1.205-1.157 1.205H29.324c-.662 0-1.204.54-1.157 1.205a17.129 17.129 0 0 0 3.788 9.603 16.847 16.847 0 0 0 9.753 5.902c3.829.769 7.803.174 11.247-1.684a16.98 16.98 0 0 0 7.635-8.506 17.19 17.19 0 0 0 .558-11.466 17.025 17.025 0 0 0-6.773-9.22 16.751 16.751 0 0 0-14.427-2.09 16.794 16.794 0 0 0-3.425 1.514 16.959 16.959 0 0 1 6.236 6.34l.005-.073a17.157 17.157 0 0 1 2.194 7.27z"
                        fill="#00A0A0"
                      ></path>
                      <ellipse
                        cx="28.125"
                        cy="36.162"
                        rx="16.875"
                        ry="17.037"
                        fill="#fff"
                      ></ellipse>
                      <ellipse
                        cx="28.125"
                        cy="36.162"
                        rx="16.875"
                        ry="17.037"
                        fill="url(#paint0_linear_1371_406869)"
                      ></ellipse>
                      <path
                        d="M36.566 50.919A17.06 17.06 0 0 0 45 36.162a10.19 10.19 0 0 0-.043-1.205 1.151 1.151 0 0 1-1.157 1.205H29.324c-.662 0-1.204.54-1.157 1.205a17.129 17.129 0 0 0 3.788 9.603 16.917 16.917 0 0 0 4.61 3.949z"
                        fill="url(#paint1_linear_1371_406869)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1371_406869"
                          x1="16.389"
                          y1="25.935"
                          x2="45.113"
                          y2="40.476"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00D2D2"></stop>
                          <stop
                            offset="1"
                            stop-color="#00D2D2"
                            stop-opacity=".29"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1371_406869"
                          x1="46.831"
                          y1="44.955"
                          x2="19.974"
                          y2="39.412"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00A0A0"></stop>
                          <stop offset="1" stop-color="#00D2D2"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
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
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.313 22.034c0-.996.526-1.916 1.38-2.414l7.927-4.622a2.738 2.738 0 0 1 2.76 0l7.928 4.622a2.793 2.793 0 0 1 1.38 2.414v10.853l-10.687 6.231-10.687-6.231-.001-10.853z"
                        fill="url(#paint0_linear_1371_406878)"
                      ></path>
                      <path
                        d="M25.313 32.888c-3.096 1.815-6.205 3.611-9.307 5.42a2.793 2.793 0 0 0-1.381 2.415v9.242c0 .997.526 1.917 1.38 2.415l7.927 4.621a2.738 2.738 0 0 0 2.761 0l9.308-5.42V39.119l-10.688-6.231z"
                        fill="url(#paint1_linear_1371_406878)"
                      ></path>
                      <path
                        d="M55.994 38.308a2.793 2.793 0 0 1 1.38 2.415v9.243c0 .996-.526 1.916-1.38 2.414l-7.926 4.621a2.737 2.737 0 0 1-2.761 0l-9.308-5.42V39.12l10.688-6.231c3.097 1.816 6.206 3.612 9.307 5.42z"
                        fill="url(#paint2_linear_1371_406878)"
                      ></path>
                      <path
                        d="M25.313 33.692c0-.498.263-.958.69-1.207l9.307-5.426a1.369 1.369 0 0 1 1.38 0l9.307 5.426c.427.25.69.71.69 1.207v10.853c0 .498-.263.958-.69 1.207l-9.307 5.426a1.369 1.369 0 0 1-1.38 0l-9.307-5.426a1.397 1.397 0 0 1-.69-1.207V33.692z"
                        fill="url(#paint3_linear_1371_406878)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1371_406878"
                          x1="25.313"
                          y1="20.44"
                          x2="46.783"
                          y2="32.725"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FB9000"></stop>
                          <stop offset="1" stop-color="#FFCB00"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1371_406878"
                          x1="36"
                          y1="39.108"
                          x2="14.53"
                          y2="51.393"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FB9000"></stop>
                          <stop offset="1" stop-color="#FFCB00"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1371_406878"
                          x1="36"
                          y1="39.108"
                          x2="57.47"
                          y2="51.393"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FB9000"></stop>
                          <stop offset="1" stop-color="#FFCB00"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1371_406878"
                          x1="36"
                          y1="26.872"
                          x2="36"
                          y2="51.365"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FDAB3D"></stop>
                          <stop
                            offset="1"
                            stop-color="#FFCB00"
                            stop-opacity=".51"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
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
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M37.022 27.938l-.086-11.129c-.946-.1-1.89-.054-2.835.023-8.392.788-14.869 7.646-14.693 15.84.143 6.634 4.414 10.993 7.754 13.39 4.755 3.412 10.364 4.827 16.126 5.437 3.393.358 6.969.521 9.49.467l2.87-.056c.347-.007.67-.178.871-.46l3.184-4.474c.278-.391.269-.919-.024-1.3l-3.317-4.315a1.097 1.097 0 0 0-.89-.427l-2.93.056c-1.919.041-4.977-.087-7.971-.404-3.725-.394-7.416-1.091-10.51-3.311-2.012-1.444-3.138-3.036-3.177-4.848-.047-2.176 1.497-4.031 3.612-4.548.826-.202 1.71-.2 2.526.059z"
                        fill="url(#paint0_linear_1371_406875)"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M35.464 26.645c.013.604.52 1.071 1.114 1.19 2.135.425 3.757 2.213 3.804 4.388.039 1.813-1.018 3.452-2.965 4.98-3.029 2.376-6.622 3.2-10.359 3.758-2.977.445-6.028.705-7.946.746l-2.796.043a1.096 1.096 0 0 0-1.023.749l-2.953 8.855a1.095 1.095 0 0 0 1.06 1.44l4.118-.072 1.83-.04c2.521-.053 6.086-.37 9.46-.873 3.083-.46 6.803-1.187 9.36-2.336l.007-.002c2.33-.934 4.54-2.238 6.511-3.784 3.234-2.538 7.314-7.076 7.172-13.71-.178-8.242-7.022-14.845-15.509-15.203-.605-.025-1.087.48-1.074 1.084l.19 8.787z"
                        fill="url(#paint1_linear_1371_406875)"
                      ></path>
                      <path
                        opacity=".6"
                        d="M49.174 40.932a78.169 78.169 0 0 1-4.603-.346c-3.063-.324-6.102-.853-8.806-2.264-2.648 1.54-5.629 2.18-8.707 2.64a78.231 78.231 0 0 1-4.584.543c1.434 1.95 3.159 3.46 4.688 4.557 2.763 1.983 5.815 3.29 9.017 4.159a18.811 18.811 0 0 0 1.99-.748l.005-.002c2.33-.934 4.541-2.238 6.512-3.784 1.48-1.162 3.14-2.744 4.488-4.755z"
                        fill="#019152"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1371_406875"
                          x1="27.974"
                          y1="31.251"
                          x2="38.083"
                          y2="48.422"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00C875"></stop>
                          <stop offset="1" stop-color="#2EAE67"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1371_406875"
                          x1="38.601"
                          y1="33.506"
                          x2="5.538"
                          y2="53.938"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00CA72"></stop>
                          <stop offset="1" stop-color="#C0FFE5"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
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
          </Menu>
        </Flex>
        <Flex display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
          <Button variant="ghost" fontWeight="350">
            Pricing
          </Button>
          <Button variant="ghost" fontWeight="350">
            Contact sales
          </Button>
          <Button variant="ghost" fontWeight="350" onClick={handleLogin}>
            {auth ? {firstName} : 'Login/Signup'}
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
          {({ isOpen }) => (
            <>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                display={{
                  base: 'block',
                  sm: 'block',
                  md: 'block',
                  lg: 'none',
                }}
              >
                {isOpen ? 'Close' : 'Open'}
              </MenuButton>
              <MenuList>
                <Menu >
                  <MenuButton
                  w="100%"
                    as={Button}
                    variant="ghost"
                    fontWeight="350"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Project
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={handleProductPage}>PWS work management</MenuItem>
                    <MenuItem>PWS marketer</MenuItem>
                    <MenuItem>PWS sales CRM</MenuItem>
                    <MenuItem>PWS projects</MenuItem>
                    <MenuItem>PWS dev</MenuItem>
                  </MenuList>
                </Menu>
                <br></br>
                <Menu>
                  <MenuButton
                   w="100%"
                    as={Button}
                    variant="ghost"
                    fontWeight="350"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Use cases
                  </MenuButton>
                </Menu>
                <br></br>
                <Menu>
                  <MenuButton
                   w="100%"
                    as={Button}
                    variant="ghost"
                    fontWeight="350"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Features
                  </MenuButton>
                </Menu>
                <br></br>
                <Menu>
                  <MenuButton
                   w="100%"
                    as={Button}
                    variant="ghost"
                    fontWeight="350"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Resources
                  </MenuButton>
                </Menu>
              </MenuList>
            </>
          )}
        </Menu>
      </Grid>
    </Box>
  );
}
