import { Box, Button, Image, Input, Menu, MenuButton, MenuGroup, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Select, Td, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { tablecontext } from "../../contextapi/tablecontext/table";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import { startSession } from "../../../../../Backend/AUTH/src/features/auth/auth.model";

export default function TD({item,id}){

const[state,setstate]=useState({})
const{getdata}=useContext(tablecontext)
useEffect(()=>{
setstate({...item})
},[item])

    function change(e){

    const{name,value}=e.target
  let x;
    if(value=="true"){
        x=true
    }
    if(value=="false"){
        x=false
    }
    console.log(x)
   let y=x==true||x==false?x:value
console.log(name,value)
setstate({
    ...state,
    [name]:y
})



}
// function onadd(e){
    
//     const{name,value}=e.target
//   let x;
//     if(value=="true"){
//         x=true
//     }
//     if(value=="false"){
//         x=false
//     }
//    let y=x==true||x==false?x:value
//     setstate({
//         ...state,
//         [name]:y
//     })
 
//     add()
// }

console.log(state)
async function add(){
    
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
let x;
if(state.status==true){
    x="green.300"
}else{
    x="orange"
}

    return(
        <Tr>
        <Td>
          <Input size="sm" w="150px" onChange={change} name="title" value={state.title}  />
        
        </Td >
        <Td  bg={x}  >
      
        {/* <Box  justifyContent="center" textAlign="center" ><Box>{state.status?"Done":"Working on it"}</Box></Box> */}
      
<Menu>
  <MenuButton  size="sm" color="white"   >
  {state.status?"Done":"Working on it"}
  </MenuButton>
  <MenuList>
    <MenuGroup >
      <MenuItem onClick={()=>setstate({...state,status:true})}>Done</MenuItem>
      <MenuItem onClick={()=>setstate({...state,status:false})}>Working on it </MenuItem>
    </MenuGroup>
 
   
  </MenuList>
</Menu>
        
        </Td>
        <Td >
        <Menu  isLazy>
  <MenuButton  size="sm" >{state.priority}</MenuButton>
  <MenuList  >
    {/* MenuItems are not rendered unless Menu is open */}
   {/* <Select variant="unstyled" name="status" onChange={change}  >
    
    <option value={true}>Done</option>
    <option value={false}>Working on it</option>
   </Select> */}
    <MenuGroup size="sm"  type='radio'>

      <MenuItem onClick={()=>setstate({...state,priority:"Low"})}>Low</MenuItem>
      <MenuItem onClick={()=>setstate({...state,priority:"Medium"})}>Medium</MenuItem>
      <MenuItem onClick={()=>setstate({...state,priority:"High"})}>High</MenuItem>
    </MenuGroup>
 
  </MenuList>
</Menu>
          
        </Td>
        {/* <Td><Select  variant='unstyled' size="sm">
            <option value="High" >High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            </Select></Td> */}
            <Td>
              {/* {state.startDate} */}
              <Input size="sm" type="date" onChange={change} name="startDate" value={state.startDate}/>
            </Td>
        {/* <Td>{state.endDate}</Td> */}
       <Td >  <Input type="date"  size="sm" onChange={change} name="endDate" value={state.endDate}/></Td>
       
        <Td>
     
        <Button ml="10px" size="sm" onClick={add}>Save data</Button>
        </Td>
        <Td>
           <Button  size="sm" onClick={todoelement}>Delete</Button>
        </Td>
        
        </Tr>

    )
}