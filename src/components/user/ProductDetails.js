import React, { Component } from 'react'
import MenuUser from '../MenuUser'
import { Card, ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons'

import { Link} from 'react-router-dom';
class ProductDetails extends Component {
    constructor(){
        super();
        this.state={
            id: null,
           name:null,
           email:null,
           rating:null,
           address:null
 

       }
    }
    componentDidMount()
    
    {
       fetch('http://my-json-server.typicode.com/neeluhargunani/apijson/restaurant/' + this.props.match.params.id).then((response) =>{
           response.json().then((result) =>{
              console.warn(result)
               this.setState({
                   name:result.name,
                   email:result.email,
                   rating:result.rating,
                   address:result.address,
                   product_description : result.product_description

               })
           })
       })
    }

    render() {
        return (
            <>
            <MenuUser/>
            
    

                <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center">
                <div className="row mrg-t">
                <div className="col-md-12 col-lg-6 col-sm-12 col-xl-6  m-auto">
               
                
                <div className="limiter">
                <div className="bx-shadw">
                   <Card >
                   <Card.Title className="text-center mt-5"><i><h3>Product Details</h3></i></Card.Title>
                 
                   
                <Card.Body>
                <div className="inner-card"> 
  <Card.Img variant="top" src="/images/restaurant.jpg" />
  <div className="d-flex justify-content-between align-items-center mt-3 px-2" onChange={(event) =>{this.setState({name:event.target.value})}}>
  {this.state.name}<span className="heart"><FontAwesomeIcon icon={faHeart} color="red" /></span>
 </div>
 <div className="mt-2 px-2" onChange={(event) =>{this.setState({product_description:event.target.value})}}> 
            <small>{this.state.product_description}</small> 
            </div>
            <div className="px-2" onChange={(event) =>{this.setState({email:event.target.value})}}>
                <h5>{this.state.email} 
               
                </h5>
            </div>
            <div class="px-2 mt-3"> <span className="btn btn-outline-primary px-3"  onChange={(event) =>{this.setState({address:event.target.value})}}>{this.state.address}</span> 
            <span class="btn btn-outline-primary px-3"  onChange={(event) =>{this.setState({rating:event.target.value})}}>
            ratings{this.state.rating}</span> </div>
           
 </div>
 
 
     

  
    <Card.Link><Link to ="/productlist">back</Link></Card.Link>
  
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
export default ProductDetails;