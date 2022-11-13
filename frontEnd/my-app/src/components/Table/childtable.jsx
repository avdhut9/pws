import { Box, Button, Heading, HStack, Input, Select, Spacer, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { tablecontext } from "../../contextapi/tablecontext/table";
import TD from "./comp";

export default function Childtable({state,i}){
 
    const{getdata}=useContext(tablecontext)
    // let [todo,settodo]=useState([]);
    // useEffect(()=>{
    //   settodo(state.todo)
    // },[state])
    const [input,setinput]=useState("")

    function change(e){
     setinput(e.target.value)
    
    }
   async function add(){
    console.log(state)
      let obj={
        email:state.email,
         groupNumber:state.groupNumber,
         groupName:state.GroupName,
        todo:[{status:false,title:input,priority:"Low",startDate:"11-10-2022",endDate:"21-11-2022",}],
       
      }
      const res=await fetch ("http://localhost:8080/todo",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
        
        
      })
      const data= await res.json()
    //   console.log(data)
 setinput("")
     getdata()
     
    }
    async  function  delectgroup(){
        const res=await fetch (`http://localhost:8080/todo/${state._id}`,{
            method:"DELETE",
           
            headers:{
                "Content-Type":"application/json"
            }
            
            
          })
          const data= await res.json()
     
         getdata()
    }
    return(
        <Box>
              <TableContainer w="80%" m="auto" >
            <HStack spacing={50} > 
            <Heading color="gray">{state.groupName}</Heading>
            <Button  size="sm" onClick={delectgroup}>Delete group</Button></HStack>
<Table size="sm"  >
    <Thead >
        <Tr>
            <Th>
title
            </Th>
            <Th>
                status
            </Th>
            <Th>
              Priority
            </Th>
            <Th>
              Start Date
            </Th>
            <Th>
              End Date
            </Th>
            <Th>
                Save Data
            </Th>
            <Th>
                delete
            </Th>
          
        </Tr>
    </Thead>
    <Tbody>
      {state.todo.map((ele)=>
     
      <TD item={ele} id={state._id} getdata={getdata}/>
    
      
      )}
    </Tbody>
    <Tfoot><Input size="sm" onChange={change} value={input} placeholder="Add item to group" mt="10px" w="200px"/>
    <Button ml="10px" size="sm" onClick={add}>Add</Button></Tfoot>
      
</Table>
</TableContainer>
        </Box>
    )
}
// day4_fw19_0511