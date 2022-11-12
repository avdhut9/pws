import { Box, Button } from "@chakra-ui/react"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { AuthContext } from "../../contextapi/Authentication/Authentication"
import { tablecontext } from "../../contextapi/tablecontext/table"
import Childtable from "./childtable"

export default function Maintable(){
    // const [state,setstate]=useState([])
 const{state,getdata}=useContext(tablecontext)

 const ok=useContext(AuthContext)
console.log(ok)
    async function  addtodo(){
        console.log("okks")
        let obj={
            email:"avdhutshinde22@gmail.com",
             groupNumber:state.length+1,
            todo:[{status:false,title:"item"}]
          }
          const res=await fetch ("http://localhost:8080/todo",{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json"
            }
            
            
          })
          const data= await res.json()
     
         getdata()
    }
//     async function getdata(){
        
//        try{

// const res= await fetch("http://localhost:8080/todo/abc@gmail.com")
// const data=await res.json()

// setstate(data)
// console.log(data)
//        }catch(e){
// console.log(e)

//        }
//     }
  
    return(
       
<Box>
{state.map((ele,i)=>
<Box pb="100px"><Childtable state={ele}  getdata={getdata} i={i}/></Box>

)}
<Button onClick={addtodo}>Add Group</Button>
</Box>
    )
}