import React, { Component } from 'react'

import { Form, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarMenu from '../NavbarMenu';

 class UserUpdate extends Component {
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
                   address:result.address
               })
           })
       })
    }

    userUpdate()
    {
       fetch('http://my-json-server.typicode.com/neeluhargunani/apijson/registration/' + this.state.id,{
           method:"PUT",
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify(this.state)
       }).then((result) => {
           result.json().then((resp) => {
               alert('user Had Been Updated')
           })
       })
    } 
   render() {
      
       return (
           <>
        <NavbarMenu/>
  
                <div className="container">
            <div className="row">
            <div className ="col-md-12 col-lg-12 col-xl-12 col-sm-12 ">
             <Card>
             <div className="limiter">
                   <div className=" container-login100">
                   <div className="wrap-login100">
                   <Form className="login100-form validate-form p-l-55 p-r-55 p-t-178 form-group">
                   <Card.Title> <span className="login100-form-title">
                        User Update
					</span>
                    </Card.Title>
              
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter user name">
                    <Form.Group controlId="formGroupName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={(event) =>{this.setState({name:event.target.value})}}  
                    placeholder=" Name" value ={this.state.name}/>
                    </Form.Group>
                    </div>
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter user email">
                    <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                     <Form.Control onChange={(event) =>{this.setState({email:event.target.value})}}  
                    placeholder =" Email" value ={this.state.email}/>
                    </Form.Group>
                    </div>
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter password">
                    <Form.Group controlId="formGroupEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(event) =>{this.setState({password:event.target.value})}}  
                    placeholder="password" value ={this.state.password}/>
                    </Form.Group>
                    </div>
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter user address">
                    <Form.Group controlId="formGroupEmail">
                    <Form.Label>Address</Form.Label>
                     <Form.Control onChange={(event) =>{this.setState({address:event.target.value})}}
                      placeholder=" Address" value ={this.state.address}/>
                      </Form.Group>
                      </div>
            
                      <div className="container-login100-form-btn">
                <Button onClick = {()=>{this.userUpdate()}} className="btn btn-secondary login100-form-btn">Updated</Button>
                </div>
                <div className="flex-col-c  p-b-40">
						<span className="txt1 p-b-9">
							Only For Admin Use
						</span>

						<Link  to = '/userlist' className="txt3">
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
export default UserUpdate;