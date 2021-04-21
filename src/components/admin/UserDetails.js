import React, { Component } from 'react'
import { Card, ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons'

import { Link} from 'react-router-dom';
import NavbarMenu from '../NavbarMenu';
 class UserDetails extends Component {
    constructor(){
        super();
        this.state={
           name:null,
           email:null,
           password:null,
           address:null,
           id: null

       }
    }
    componentDidMount()
    
    {
       fetch('http://my-json-server.typicode.com/neeluhargunani/apijson/registration/' + this.props.match.params.id).then((response) =>{
           response.json().then((result) =>{
              console.warn(result)
               this.setState({
                id:result.id,
                   name:result.name,
                   email:result.email,
                   password:result.password,
                   address:result.address,
                   description:result.description
               })
           })
       })
    }

    render() {
        return (
            <>
            <NavbarMenu/>
            
    

            <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
            <div className="row mrg-t">
            <div className="col-md-12 col-lg-6 col-sm-12 col-xl-6  m-auto">
           
            
            <div className="limiter">
            <div className="bx-shadw">
            <Card >
                   <Card.Title className="text-center mt-5"><i><h3>profile Details</h3></i></Card.Title>
                 
 
  <Card.Body>
                <div className="inner-card"> 
  <Card.Img variant="top" src="/images/images.png" />
  <div className="d-flex justify-content-between align-items-center mt-3 px-2" onChange={(event) =>{this.setState({name:event.target.value})}}>
  {this.state.name}<span className="heart"><FontAwesomeIcon icon={faHeart} color="red" /></span>
 </div>
 <div className="mt-2 px-2" onChange={(event) =>{this.setState({description:event.target.value})}}> 
            <small>{this.state.description}</small> 
            </div>
            <div className="px-2" onChange={(event) =>{this.setState({email:event.target.value})}}>
                <h5>{this.state.email} 
               
                </h5>
            </div>
            <div class="px-2 mt-3"> <span className="btn btn-outline-primary px-3"  onChange={(event) =>{this.setState({address:event.target.value})}}>{this.state.address}</span> 
            <span class="btn btn-outline-primary px-3"  onChange={(event) =>{this.setState({id:event.target.value})}}>
            User id:{this.state.id}</span> </div>
           
 </div>
 
 
     

  
    <Card.Link><Link to ="/userlist">back</Link></Card.Link>
  
    </Card.Body>
 
</Card>
               
</div>
               </div>
               </div>     
               </div>
               </div>
  
            </>
        );
    }
}
export default UserDetails;