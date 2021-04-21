import React, { Component } from 'react'
import { Form, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarMenu from '../NavbarMenu';
class Registration extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            password :null,
           address:null

        }
    }
    register(){
      fetch('http://my-json-server.typicode.com/neeluhargunani/apijson/registration',{
          method:"Post",
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(this.state)
      }).then((result) => {
          result.json().then((resp) => {
              alert('Registration done please login')
          })
      })
    }
    render() {
        return (
            <>
            <NavbarMenu/>
                <div className="container">
            <div className="row">
            <div className ="col-md-12 col-lg-12 col-xl-12 col-sm-12 mrg-t ">
             <Card>
            
                   <div className="limiter">
                   <div className=" container-login100">
                   <div className="wrap-login100">
                   <Form className="login100-form validate-form p-l-55 p-r-55 p-t-178 form-group">
                   <Card.Title> <span className="login100-form-title">
						Create account
					</span>
                    </Card.Title>
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter full name">
                <Form.Group controlId="formGroupName">
               
    <Form.Label>Full Name</Form.Label>
    <Form.Control className = "input100 " type="text" placeholder="Enter your  Name" onChange={(event) =>{this.setState({name:event.target.value})}}  required />
  	<span className="focus-input100"></span>
    </Form.Group>
   </div>
   <div className="wrap-input100 validate-input" data-validate="Please enter email">
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  className = "input100 " placeholder="Enter email"  onChange={(event) =>{this.setState({email:event.target.value})}}  required/>
    <span className="focus-input100"></span>
  </Form.Group>
  </div>
  <div className="wrap-input100 validate-input" data-validate="Please enter password">
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  className = "input100" placeholder="Password"  onChange={(event) =>{this.setState({password:event.target.value})}}  required/>
    <span className="focus-input100"></span>
  </Form.Group>
  </div>
  <div className="wrap-input100 validate-input" data-validate="Please enter address">
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Enter your address</Form.Label>
    <Form.Control type="text" className = "input100" placeholder="Apartment, studio, or floor"  onChange={(event) =>{this.setState({address:event.target.value})}}  />
    <span className="focus-input100"></span>
  </Form.Group>
  </div>
  <div className="container-login100-form-btn">
  <Button onClick = {()=>{this.register()}} className="btn btn-secondary login100-form-btn">Submit</Button>
</div>
<div className="flex-col-c  p-b-40">
						<span className="txt1 p-b-9">
							Already have an account?
						</span>

						<Link  to = '/userlogin' className="txt3">
							Login now
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

export default Registration;