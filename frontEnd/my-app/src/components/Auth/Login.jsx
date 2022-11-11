import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Box, Button, Center, FormControl, Img, Input, InputGroup, Text ,InputRightElement} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contextapi/Authentication/Authentication'
import "./Login.module.css"

const Login = () => {
    const [show ,setShow] = useState(false)
    const {postLogin,sentence,logError} = useContext(AuthContext)
    const lineStyleL={
        width: "190px",
    border: "0.5px solid #c5c7d0",
    margin: "16px"
    }
    const [state,setState] = useState({
        
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        const {name,value}  = e.target
        setState({
            ...state,
            [name]:value
        })
        console.log(state)
    }
    const handleLogin = (e)=>{
        e.preventDefault()
        console.log("jdcn")
        postLogin(state)
    }
  return (
    <Box w="40%" m="auto">
        <Center display="flex" m="auto" w="5%"   mt="50px" >
            <Text fontSize='5xl' as="b">Log </Text>
            <Text fontSize='5xl' fontWeight="lighter">In</Text>
        </Center>
        <Center mb="50px" fontWeight="lighter" fontSize='3xl' >{sentence ? sentence :null}</Center>
        <FormControl  className="Login_boxes" margin="auto"   w="100%">
            <Box display="flex" pl="33px">
        <h1 style={{marginRight:"10px",fontWeight:"lighter",marginTop:"10px"}}>Email  </h1>
            <Input type="text" placeholder='Email' onChange={handleChange} name="email" size="lg" width="100%" />
            </Box>
            <br />
            <Box display="flex">
            <h1 style={{marginRight:"10px",fontWeight:"lighter",marginTop:"10px"}}>Password </h1>
            <InputGroup>
            <Input type={show ? "text": "password"} placeholder='password' name="password" onChange={handleChange} size="lg" width="100%" />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={()=>setShow(!show)} bg="white">
                    {show ?  <ViewOffIcon/> : <ViewIcon/>}
                    </Button>
                </InputRightElement>
            </InputGroup>

            </Box>
            <br />
            <h1 style={{marginLeft:"75px",marginRight:"10px",marginTop:"10px",color:"#0073ea"}}>Forgot your password ?</h1>
            <Input type="submit"onClick={handleLogin} value="Login →" size="lg" ml="75px" w="85%" bg="#0073ea" color="white"/>
            { logError && <h1 style={{marginLeft:"75px",marginRight:"10px",marginTop:"10px",color:"red"}}>Incorrect Credentials</h1>}
            <Center mt="30px"><span style={lineStyleL}></span> Or Sign in with <span style={lineStyleL}></span></Center>
        </FormControl>
        <br />
        <br />
        <Center border="1px solid teal" w="20%" borderRadius="5px" p="10px" m="auto" columnGap="10px"><Img src="https://cdn.monday.com/images/logo_google_v2.svg"/><Text >Google</Text></Center>
        {/* <div className="login-separator-wrapper">
            <div className="login-separator-component split-line">
                <span className="separator-line" style={lineStyle}></span><h2>Or Sign in with</h2><span class="separator-line"></span>
            </div>
        </div> */}
    <Center mt="30px" mb="20px"><span style={ {width: "100%",
    border: "0.5px solid #c5c7d0",
    margin: "16px"}}></span></Center>
    <Center fontSize="md" mb="30px"> In Order to Sign up with Different account <NavLink to="/signup"> <Button  ml="10px" bg="#0073ea" color="white">Sign up</Button> </NavLink></Center>
    
    </Box>
  )
}

export default Login
