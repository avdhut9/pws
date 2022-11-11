import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { AuthContext } from "../Authentication/Authentication";

export const tablecontext=createContext()

export default function Tablecontextprovider({children}){
    const [state,setstate]=useState([])
   
   
    useEffect(()=>{
getdata()
    },[])
    async function getdata(){
        
        try{
 
 const res= await fetch(`https://test-service-app.onrender.com/todo/avdhutshinde22@gmail.com`)
 const data=await res.json()
 
 setstate(data)
 
        }catch(e){
 console.log(e)
 
        }
     }
   
    return(
        <tablecontext.Provider value={{state,getdata}}>
{children}
        </tablecontext.Provider>
    )
}