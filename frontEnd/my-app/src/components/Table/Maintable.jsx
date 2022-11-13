import { Box, Button, Image, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contextapi/Authentication/Authentication';
import { tablecontext } from '../../contextapi/tablecontext/table';
import Navigation from '../../pages/Product/Sidebar/Navigation';
import Childtable from './childtable';

export default function Maintable() {
  // const [state,setstate]=useState([])
  const { state, getdata } = useContext(tablecontext);

  const { email } = useContext(AuthContext);
console.log(email,`Group${state.length + 1}`,"inside maintable")
  async function addtodo() {
    let obj = {
      email: email,
      groupNumber: state.length + 1,
      groupName: `Group${state.length + 1}`,
      todo: [
        {
          status: false,
          title: 'item',
          priority: 'Low',
          startDate: '11-11-2022',
          endDate: '12-12-2022',
        },
      ],
    };
    console.log(obj.groupName)
    const res = await fetch('https://server-run.onrender.com/todo', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data)
    getdata();
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

  return (
    <Box>
      <Box display="flex" gap="50px">
        <Box>
          <Navigation />
        </Box>
        <Box w="100%">
          <Box pt="50px" ml="0px">
            {state.length == 0 ? (
              <Box>
                <Image
                  m="auto"
                  src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif"
                />
              </Box>
            ) : (
              state.map((ele, i) => (
                <Box pb="100px">
                  <Childtable state={ele} getdata={getdata} i={i} />
                </Box>
              ))
            )}
          </Box>
          <VStack>
            <Box pb="100px" display="flex" justifyContent="center" m="auto">
              <Button onClick={addtodo}>Add Group</Button>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
