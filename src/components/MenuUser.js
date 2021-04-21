import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome, faList, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { Nav,Navbar } from 'react-bootstrap';

 class MenuUser extends Component {
    render() {
        return (
            <div>
               
    <Navbar bg="light" expand="lg" className="fixed-top">
    <div className="container">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/"><FontAwesomeIcon icon={faHome}/><span>Home</span></Link></Nav.Link>
      
      
     
      
     
      <Nav.Link><Link to="/productlist"><FontAwesomeIcon icon={faList}/><span>ProductList</span></Link></Nav.Link>
    
      <Nav.Link><Link to="/registration"><FontAwesomeIcon icon={faUserPlus}/><span>Registeration</span></Link></Nav.Link>
    
      
  
    {
         localStorage.getItem('userlogin') ?
         <Nav.Link><Link to="/userlogout"><FontAwesomeIcon icon={faUser}/><span>Logout</span></Link></Nav.Link>
        :
        <Nav.Link><Link to="/userlogin"><FontAwesomeIcon icon={faUserPlus}/><span> UserLogin</span></Link></Nav.Link>
   }
    </Nav>
   
  </Navbar.Collapse>
  </div>
</Navbar>

            </div>
        )
    }
}

export default MenuUser;