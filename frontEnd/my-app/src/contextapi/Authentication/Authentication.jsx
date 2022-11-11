import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext=createContext()
export default function AuthProvider({children}){
  const [auth,setAuth] = useState(false)
  const [firstName,setName] = useState("")          //signIn
  const [error,setError] = useState(false)          //signIn
  const [sentence , setSentence] = useState("")     //login
  const [logError,setLogError] = useState(false)    //login
  const [email,setEmail] = useState("")
  
  const postLogin = async ({ email, password }) => {
    try{
      console.log("inside signup",{password,email})
      let response = await axios.post("https://test-service-app.onrender.com/auth/login", {
        email: email,
        password: password,
      });
      let data = response.data;
      if(data.token){
        let [a,b,c] = data.token.split("-")
        setEmail(b)
      console.log(a,b,c,"inside login")
      
      setSentence(`Welcome ${a} `)
      setLogError(false)
      }else{
        
        setLogError(true)
      }
      
    }catch(er){
        console.log(er.message)
    }
  };
  const postSignUp = async ({ email, password, name, gender,age }) => {
    try{
      let response = await axios.post("https://test-service-app.onrender.com/auth/signup", {
        email: email,
        password: password,
        name: name,
        gender: gender,
        age:age
      });
      let Data = response.data
      console.log(Data,"inside ")
      if(typeof Data===Object){
        setError(false)
      }else{
        setError(true)
        setName(Data)
      }
    }catch(er){
      console.log(er.message)
    }

    
  };
 return(
   <AuthContext.Provider value={{auth,setAuth,postLogin,postSignUp,firstName,error,sentence,logError}}>
    {children}
   </AuthContext.Provider>
 )
}