import React from 'react'
import Leftsidebar from "./Leftsidebar"
import Rightsidebar from "./Rightsidebar"
import Middle from "./Middle"
import Header from '../Header/Header'
 import './Style.css';
 
export const Navigation = () => {
  return (
    <div className='Navigation'>
      <div className='hedlef'>
      <Leftsidebar/>      
      </div>
     <div className='Midrig'>
     <Header/>
     <div className='Midrigwh'>
      <Middle/>
      
      <Rightsidebar/>
     </div>
    
     </div>
      
     
    </div>
  )
}

export  default Navigation
