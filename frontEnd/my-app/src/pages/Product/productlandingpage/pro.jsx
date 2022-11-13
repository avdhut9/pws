import Header from "../Header/Header";
import Leftsidebar from "../Sidebar/Leftsidebar";
import Middle from "../Sidebar/Middle";
import Rightsidebar from "../Sidebar/Rightsidebar";

export default function Inb(){
    return (
        <div className='Navigation'>
        <div className='hedlef'>
        <Leftsidebar/>      
        </div>
       <div style={{width:"90%"}} className='Midrig'>
      <Header/>
       <div className='Midrigwh'>
        <Middle/>
        
      <Rightsidebar/>
       </div>
      
       </div>
        
       
      </div>
    )
}