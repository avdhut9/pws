import React from 'react'
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Rightsidebar = () => {
  return (
    <div className='Rightsidebar'>
      <div><h5>Learn & get inspired</h5></div>

      <div className='div1'>
        <div> <img src="https://cdn.monday.com/images/learning-center/get-started-2.svg" alt="" />  </div>
        <div>
         <h6> Getting Started</h6>
        <p>Learn how monday.com works</p>         
        </div>
      </div>
      <div className='div1'>
        <div> <img src="https://cdn.monday.com/images/learning-center/help-center.svg" alt="" />  </div>
        <div>
         <h6> Help Center</h6>
        <p>Learn And Get Support </p>         
        </div>
      </div>
      <div className='div1'>
        <div> <img src="https://cdn.monday.com/images/learning-center/webinars.svg" alt="" />  </div>
        <div>
         <h6>Join a Weinar</h6>
        <p>Watch a live walkthrough</p>         
        </div>
      </div>
      <div className='div2'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.monday.com/images/homepage-desktop/templates-banner.png" />
      <Card.Body>      
        <Card.Text>
          Boost your workflow in minutes with ready-made templates
        </Card.Text>  
        <Button variant="light">Give feedback</Button>{' '}  
      </Card.Body>
    </Card>  
      </div>
     
    </div>
  )
}

export default Rightsidebar