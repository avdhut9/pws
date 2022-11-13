import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import inStyle from "./Inbox.module.css"
 import  "./Inbox.css"
function Inbox() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>  <h6>Inbox</h6> </Accordion.Header>
        <Accordion.Body>
         <div className='user'>
            <div className='welcome'>
               <div> <img src="https://cdn.monday.com/images/damann.jpg" alt="" width="50px" /></div> 
                <div> <h6>Roy Mann</h6>
                   <p>Hi <span id='name'>@Satyaprakash</span></p>
               </div>              
            </div>

            <div className='WElcome'>
             
             <div className='got'>
             <div className='cont'>
             <div> <img className='img-1' src="https://files.monday.com/use1/photos/36435001/thumb_small/36435001-user_photo_initials_2022_11_11_18_48_48.png?1668192528" alt="" width="40px"/>  </div>
             <div> <img className='img-1' src="https://cdn1.monday.com/dapulse_default_photo.png" alt="" width="40px"/></div>
             <div> <Button id='Add'  variant="primay">+</Button>{' '} </div>
             </div>
             <div> <h4 id='htag'>Invite your team mates and start collaborating</h4> </div>
             <div>
             <div></div>
             </div>

             </div>
            

             <div>  <Button variant="light">No Thanks</Button>{' '} </div>
             <div>  <Button variant="primary">Invite</Button>{' '} </div>

            </div>
         </div>
        
        </Accordion.Body>
      </Accordion.Item>         
    </Accordion>
  );
}

export default Inbox;