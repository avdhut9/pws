import React from 'react'
import { BsBookmark,BsBell,BsFillInboxFill,BsCalendarCheck,BsStar,BsApple,BsPersonPlus,BsSearch,BsQuestion,BsGrid3X3Gap } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
 import { FaUserCircle } from 'react-icons/fa';
const Leftsidebar = () => {
  return (
    <div className='Leftsidebar'>
      <ul> <img src="https://cdn.monday.com/images/logos/monday_logo_icon.png" alt="Girl in a jacket" width="50" height="50"/>
 </ul>
      <ul>
      <BsBookmark/>
      </ul>
      <ul>
        <BsBell/>
      </ul>
      <ul><BsFillInboxFill/></ul>
      <ul><BsCalendarCheck/></ul>
      <ul><BsStar/></ul>
      <Button className="vfd">
        
        </Button>
      <ul><BsApple/></ul>
      <ul><BsPersonPlus/></ul>
      <ul><BsSearch/></ul>
      <ul><BsQuestion/></ul>
      <ul><BsGrid3X3Gap/></ul>
      <ul><FaUserCircle/></ul>
      
    </div>
  )
}

export default Leftsidebar