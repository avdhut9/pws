import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Box, Button, Center, FormControl, Img, Input, InputGroup, Text ,InputRightElement} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contextapi/Authentication/Authentication'
import Navbar from '../Navbar/Navbar'
import PWS from "../Navbar/PWS.png"
const init = {
    name:"",
    email:"",
    gender:"",
    password:"",
    age:""
}
const SignUp = () => {
    const navigate = useNavigate()
    const [show ,setShow] = useState(false)
    const {postSignUp,firstName,error,SignAuth,auth} = useContext(AuthContext)
    const [cred,setCred] = useState(init)
    const handleChange = (e)=>{
        const {name,value} = e.target
        setCred({
            ...cred,
            [name]:value
        })
        console.log(cred,"inide change")
    }
    const lineStyleL={
        width: "190px",
    border: "0.5px solid #c5c7d0",
    margin: "16px"
    }
    const handleSubmit = (e)=>{
            e.preventDefault()
            postSignUp(cred)
            setCred(init)
    }

    
    if(SignAuth){
        return navigate("/login")
    }
  return (
    <Box>
        <Navbar/>
    <Box w={{base:"90%",sm:"90%",md:"60%",lg:"40%"}} m="auto" mb="100px">
            <Center mt="20px" fontSize='xl' as="b">Welcome to <Img src={PWS} ml="5px" w='15%'/></Center>
            <Center fontSize='xl' fontWeight="lighter" mb="40px">Get started - it's free. No credit card needed.</Center>
        <FormControl  className="Login_boxes" margin="auto"   w="100%">
        <Box display="flex">
        {/* <h1 style={{marginRight:"10px",fontWeight:"lighter",marginTop:"10px"}}>Name  </h1> */}
            <Input type="text" placeholder='Name' onChange={handleChange} name="name" size="lg" width="100%" />
            </Box>
            <br />
            <Box display="flex" >
        {/* <h1 style={{marginRight:"10px",fontWeight:"lighter",marginTop:"10px"}}>Email  </h1> */}
            <Input type="email" placeholder='Email' onChange={handleChange} name="email" size="lg" width="100%" />
            </Box>
            <br />
            <Box display="flex">
            {/* <h1 style={{marginRight:"10px",fontWeight:"lighter",marginTop:"10px"}}>Password </h1> */}
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
            <Box w="100%" >
            <select name='gender' placeholder='Gender' onChange={handleChange} style={{padding:"10px",width:"100%",border:"1px solid #E0E0E0",borderRadius:"5px"}}>
                <option value="">Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
            </Box>
            <br />


            <Box display="flex" >
        {/* <h1 style={{marginRight:"10px",fontWeight:"lighter",marginTop:"10px"}}>Age  </h1> */}
            <Input type="Number" placeholder='Age' onChange={handleChange} name="age" size="lg" width="100%" />
            </Box>




           
            <br />
            <Box w="100%"   textAlign="center">
              <Input type="submit" onClick={handleSubmit} value="Sign up" size="lg"   mt="20px"  w={{base:"100%",sm:"100%",md:"50%",lg:"40%"}} bg="#0073ea" color="white" />    
              </Box>
             
               
            
            { firstName && <h3 style={{marginLeft:"75px",marginRight:"10px",marginTop:"10px",color:"red"}}>{firstName}</h3> }
            <Center mt="40px"><span style={lineStyleL}></span> OR <span style={lineStyleL}></span></Center>
        </FormControl>
        <Center border="1px solid teal" w={{base:"40%",sm:"40%",md:"30%",lg:"30%"}} borderRadius="5px" p="5px" m="auto" columnGap="10px"><Img src="https://cdn.monday.com/images/logo_google_v2.svg"/><Text >Google</Text></Center>
    
    
        <Center mt="30px">Already have account ?<NavLink to="/login" style={{color:"blue"}}>Login</NavLink></Center>
    </Box>
    </Box>
  )
}

export default SignUp


// // <Center fontSize="md" mb="30px"> In Order to Sign up with Different account <Button  ml="10px" bg="#0073ea" color="white">Sign up</Button> </Center>
//     {/* <div className="login-separator-wrapper">
//             <div className="login-separator-component split-line">
//                 <span className="separator-line" style={lineStyle}></span><h2>Or Sign in with</h2><span class="separator-line"></span>
//             </div>
//         </div> */}
//     {/* <Center mt="30px" mb="20px"><span style={ {width: "100%",
//     border: "0.5px solid #c5c7d0",
//     margin: "16px"}}></span></Center> */}