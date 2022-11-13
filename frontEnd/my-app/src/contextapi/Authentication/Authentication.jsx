import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext=createContext()
export default function AuthProvider({children}){
  const token = localStorage.getItem("token")
  const mailLocal = localStorage.getItem("email")
  const [auth,setAuth] = useState(!!token)
  const [SignAuth,setSignAuth] = useState(false)
  const [firstName,setName] = useState("")          //signIn
  const [error,setError] = useState(false)          //signIn
  const [sentence , setSentence] = useState("")     //login
  const [logError,setLogError] = useState(false)    //login
  const [email,setEmail] = useState(mailLocal)
  const postLogin = async ({ email, password }) => {
    try{
      console.log("inside signup",{password,email})
      let response = await axios.post("http://localhost:8080/auth/login", {
        email: email,
        password: password,
      });
      let data = response.data;
      if(data.token){
        let [a,b,c] = data.token.split("-")
        console.log(a,b,c,"inside login")
        setSentence(`Welcome ${a} `)
        setName(a)
        setEmail(b)
       
        setTimeout(()=>{
          localStorage.setItem("token",data.token)
          localStorage.setItem("email",b)
          setAuth(true)
          setLogError(false)
        },3000)
      }else{
        setSentence("")
        setLogError(true)
      }
      
    }catch(er){
      setLogError(er.message)
        console.log(er.message,"inside asynclogin")
    }
  };
  const postSignUp = async ({ email, password, name, gender,age }) => {
    try{
      console.log({ email, password, name, gender,age })
      let response = await axios.post("http://localhost:8080/auth/signup", {
        email: email,
        password: password,
        name: name,
        gender: gender,
        age:age
      });
      let Data = response.data
      console.log(typeof Data,"inside ")
      
      
        setError(true)
        setName("")
        setSignAuth(true)
    }catch(er){
      setName("Incorrect Entries")
      console.log(er.message)
    }

    
  };
 return(

   <AuthContext.Provider value={{auth,setAuth,postLogin,postSignUp,firstName,error,sentence,logError,email,SignAuth}}>

    {children}
   </AuthContext.Provider>
 )
}