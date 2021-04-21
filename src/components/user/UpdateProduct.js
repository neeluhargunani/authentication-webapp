import React, { Component } from 'react'
import { Form, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarMenu from '../NavbarMenu';

export default class UpdateProduct extends Component {
    constructor(){
        super();
        this.state={
           name:null,
           email:null,
           rating:null,
           address:null,
           id: null

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
                   id:result.id,
                   rating:result.rating,
                   address:result.address
               })
           })
       })
    }
    update()
    {
       fetch('http://my-json-server.typicode.com/neeluhargunani/apijson/restaurant/' + this.state.id,{
           method:"PUT",
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify(this.state)
       }).then((result) => {
           result.json().then((resp) => {
               alert('Restaurant Had Been Updated')
           })
       })
    } 
   render() {
      
       return (
           <>
         <NavbarMenu/>
                <div className="container">
            <div className="row">
            <div className ="col-md-12 col-lg-12 col-xl-12 col-sm-12 mrg-t">
             <Card>
             <div className="limiter">
                   <div className=" container-login100">
                   <div className="wrap-login100">
                   <Form className="login100-form validate-form p-l-55 p-r-55 p-t-178 form-group">
                   <Card.Title> <span className="login100-form-title">
                        product Update
					</span>
                    </Card.Title>
               
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter product name">
                    <Form.Group controlId="formGroupName">
                    <Form.Label>product Name</Form.Label>
                    <Form.Control onChange={(event) =>{this.setState({name:event.target.value})}}  
                    placeholder="Restaurant Name" value ={this.state.name} className = "input100"/>
                   <span className="focus-input100"></span>
                   </Form.Group>
                    </div>
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter company">
                    <Form.Group controlId="formGroupEmail">
                    <Form.Label>Company Email</Form.Label>
                     <Form.Control onChange={(event) =>{this.setState({email:event.target.value})}}  
                    placeholder ="Restaurant Email" value ={this.state.email} className = "input100"/>
                  <span className="focus-input100"></span>
                  </Form.Group>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter password">
  <Form.Group controlId="formGroupPassword">
  <Form.Label>Product Rating</Form.Label>
                     <Form.Control onChange={(event) =>{this.setState({rating:event.target.value})}}  
                    placeholder="Restaurant Rating" value ={this.state.rating} className = "input100"/>
                   <span className="focus-input100"></span>
                    </Form.Group>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter password">
                    <Form.Group controlId="formGridAddress2">
                    <Form.Label>Company address</Form.Label>
                     <Form.Control onChange={(event) =>{this.setState({address:event.target.value})}}
                      placeholder="Restaurant Address" value ={this.state.address} className = "input100"/>
            <span className="focus-input100"></span>
            </Form.Group>
               </div>
               <div className="container-login100-form-btn">
                        <Button onClick = {()=>{this.update()}} className="btn btn-secondary login100-form-btn">Update Product </Button>
                        </div>
                        <div className="flex-col-c  p-b-40">
						<span className="txt1 p-b-9">
							Only For Admin Use
						</span>

						<Link  to = '/productlist' className="txt3">
							go back
              </Link>
            </div>
                        </Form>
                </div>
                </div>
                </div>
                </Card>
           </div>
           </div>
           </div>
           </>
       )
   }
}
