import { Box, Button, Heading, HStack, Input, Spacer, Table, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { tablecontext } from "../../contextapi/tablecontext/table";
import TD from "./comp";

export default function Childtable({state,i}){
    const{getdata}=useContext(tablecontext)
    let [todo,settodo]=useState([]);
    useEffect(()=>{
      settodo(state.todo)
    },[state])
    const [input,setinput]=useState("")

    function change(e){
     setinput(e.target.value)
    
    }
   async function add(){
      let obj={
        email:state.email,
         groupNumber:state.groupNumber,
        todo:[{status:false,title:input}]
      }
      const res=await fetch ("https://test-service-app.onrender.com/todo",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
        
        
      })
      const data= await res.json()
 setinput("")
     getdata()
     
    }
    async  function  delectgroup(){
        const res=await fetch (`https://test-service-app.onrender.com/todo/${state._id}`,{
            method:"DELETE",
           
            headers:{
                "Content-Type":"application/json"
            }
            
            
          })
          const data= await res.json()
     console.log(data)
         getdata()
    }
    return(
        <Box>
           <HStack spacing={50} > <Heading>Group {i+1}</Heading>
            <Button onClick={delectgroup}>Delete group</Button></HStack>
<Table>
    <Thead>
        <Tr>
            <Th>
title
            </Th>
            <Th>
                status
            </Th>
            <Th>
                delete
            </Th>
        </Tr>
    </Thead>
    <Tbody>
      {todo.map((ele)=>
     
      <TD item={ele} id={state._id} getdata={getdata}/>
    
      
      )}
    </Tbody>
    <Tfoot><Input onChange={change} value={input} placeholder="Add item" w="200px"/>
    <Button onClick={add}>Add</Button></Tfoot>
      
</Table>
        </Box>
    )
}
// day4_fw19_0511