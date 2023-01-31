import React, { Component } from 'react'
import NavbarMenu from '../NavbarMenu';
import { Form, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class AdminLogin extends Component {
    constructor()
    {
        super();
        this.state={
            name:'',
            password:''
        }
    }
     login(){
        console.warn(this.state)
          fetch("http://my-json-server.typicode.com/neeluhargunani/apijson/login?q=" + this.state.name).then((data) =>{
            data.json().then((resp)=>{
                console.warn("resp", resp)
                if(resp.length>0)
                {
                    localStorage.setItem('login',JSON.stringify(resp))
                    console.warn(this.props.history.push('list'))
                }
                else{
                    alert("please check username and password")
                }
            })
        })
    }
   render() {
       return (
           <>
        <NavbarMenu/>
           <div className="container">
           <div className="row">
                   <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">
                   <Card>
           <div className="limiter">
                   <div className=" container-login100">
                 
                   <div className="wrap-login100">
                   <Form className="login100-form validate-form p-l-55 p-r-55 p-t-178 form-group">
                   <Card.Title> <span class="login100-form-title">
						Admin Login
					</span>
                    </Card.Title>
                    <Card.Body>
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                   <Form.Group controlId="formGroupName">
                    <Form.Label> Name</Form.Label>
                    <Form.Control  type="text" className="input100"  name= "user" placeholder = "enter your name"  onChange = {(event) => this.setState({name:event.target.value})} />
                    <span className="focus-input100"></span>
                   </Form.Group>
                   </div>
                   <div className="wrap-input100 validate-input" data-validate="Please enter password">
           <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
                    <Form.Control  type ="password" className="input100"  name= "password"  placeholder = "enter your password"  onChange = {(event) => this.setState({password:event.target.value})} />
                    <span className="focus-input100"></span>
          </Form.Group>
          </div>
          <div className="container-login100-form-btn">
          <Button onClick={()=>{this.login()}} className="btn btn-secondary login100-form-btn">Login</Button>
          </div>
          <div className="flex-col-c p-t-170 p-b-40">
						<span className="txt1 p-b-9">
							For Admin Use Only
						</span>

                        <Link  to = '/registration' className="txt3">
							User Register now
						</Link>
					</div>
           </Card.Body>
           </Form>
           </div>
           </div>
           </div>
           </Card>
           </div>
           </div>
           </div>
           </>
       );
   }
}
export default AdminLogin;