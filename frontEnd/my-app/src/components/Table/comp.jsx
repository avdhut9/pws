import { Button, Input, Td, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { tablecontext } from "../../contextapi/tablecontext/table";
// import { startSession } from "../../../../../Backend/AUTH/src/features/auth/auth.model";

export default function TD({item,id}){
 console.log(item)
const[state,setstate]=useState({})
const{getdata}=useContext(tablecontext)
useEffect(()=>{
setstate({...item})
},[item])
    function change(e){
const{value,name}=e.target
setstate({
    ...state,
    [name]:value
})


}
async function add(){
    console.log(state)
const res=await fetch (`https://test-service-app.onrender.com/todo?groupId=${id}&titleId=${state._id}`,{
    method:"PATCH",
    body:JSON.stringify(state),
    headers:{
        "Content-Type":"application/json"
    }
    
   
  })
  const data= await res.json()
 
getdata()


    }
async function todoelement(){
    const res=await fetch (`https://test-service-app.onrender.com/todo?groupId=${id}&titleId=${state._id}`,{
        method:"DELETE",
        body:JSON.stringify(state),
        headers:{
            "Content-Type":"application/json"
        }
        
       
      })
      const data= await res.json()
      getdata()
}
    return(
        <Tr>
<Td>
  <Input w="150px" onChange={change} name="title" value={state.title}/>
  <Button onClick={add}>edit</Button>
</Td>
<Td>
    {state.status?"Completed":"not-Completed"}
</Td>
<Td>
   <Button onClick={todoelement}>Delete</Button>
</Td>

</Tr>
    )
}