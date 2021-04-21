import React, { Component } from 'react'
import MenuUser from '../MenuUser'
import { Form, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UserLogin extends Component {
    constructor()
    {
        super();
        this.state={
            name:'',
            password:''
        
        }
    }
     userLogin(){
        console.warn(this.state)
          fetch("http://my-json-server.typicode.com/neeluhargunani/apijson/registration?q=" + this.state.name).then((data) =>{
            data.json().then((resp)=>{
                console.warn("resp", resp)
                if(resp.length>0)
                {
                    localStorage.setItem('userlogin',JSON.stringify(resp))
                     
                    console.warn(this.props.history.push('productlist'))
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
        <MenuUser/>
           <div className="container">
                   <div className="row">
                   <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">
                   <Card>
                   <div className="limiter">
                   <div className=" container-login100">
                 
                   <div className="wrap-login100">
                   <Form className="login100-form validate-form p-l-55 p-r-55 p-t-178 form-group">
                  <Card.Title> <span class="login100-form-title">
						Sign In
					</span>
                    </Card.Title>
                    <Card.Body>
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                   <Form.Group controlId="formGroupName">
  
   
                  
                  
                   <Form.Label>Full Name</Form.Label>
                   <Form.Control className="input100 " type="text" name="name" placeholder="enter your username" 
                             onChange = {(event) => this.setState({name:event.target.value})}
                        />
						<span className="focus-input100"></span>
					
                    </Form.Group>
                    </div>
           <div className="wrap-input100 validate-input" data-validate="Please enter password">
           <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
           <Form.Control className="input100 " type="password" name="password" placeholder="enter your Password" 
                        onChange = {(event) => this.setState({password:event.target.value})}/>
						<span className="focus-input100"></span>
                        </Form.Group>
					</div>
        
          <div className="container-login100-form-btn">
         
          <Button onClick={()=>{this.userLogin()}} className="btn btn-secondary login100-form-btn">Login</Button>
          </div> 
          <div className="flex-col-c p-t-170 p-b-40">
						<span className="txt1 p-b-9">
							Don’t have an account?
						</span>

                        <Link  to = '/registration' className="txt3">
							Register  now
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
export default UserLogin;