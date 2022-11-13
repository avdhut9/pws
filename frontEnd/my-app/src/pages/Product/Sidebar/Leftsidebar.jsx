import React from 'react'
import { BsBookmark,BsBell,BsFillInboxFill,BsCalendar,BsStar,BsPersonPlus,BsSearch,BsQuestion,BsGrid3X3Gap } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
 import { FaUserCircle } from 'react-icons/fa';
 
import { useNavigate } from 'react-router-dom';

const Leftsidebar = () => {

const navigate = useNavigate()
  const handleClick = () => {    
    navigate("/workspace")
  }
  
function ok1(){
  navigate("/product")
}
  return (
    <div className='Leftsidebar'>
      <ul onClick={ok1}> <img src="https://cdn.monday.com/images/logos/monday_logo_icon.png" alt="Girl in a jacket" width="50" height="50"/>
     </ul>
      <ul onClick={handleClick}>
        <BsBookmark/> </ul>
      <ul onClick={ok1} ><BsBell/></ul>
      <ul> <BsFillInboxFill/> </ul>
       <ul><BsCalendar/></ul> 
      <ul><BsStar/></ul>
      <Button className="vfd"></Button>      
      <ul><BsPersonPlus/></ul>
      <ul><BsSearch/></ul>
      <ul><BsQuestion/></ul>
      <ul><BsGrid3X3Gap/></ul>
      <ul><FaUserCircle/></ul>
      
    </div>
  )
}

export default Leftsidebar
