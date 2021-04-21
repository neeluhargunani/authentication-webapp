import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';

 class Home extends Component {
    render() {
        return (
            <div className="container">
              <div className ="row mrg-t">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xl-6 ">
              <div className="limiter">
                <div className="bx-shadw">
              <Card  className="text-center">
    <Card.Img variant="top" src="/images/dmin_1.png" className="img-fluid" />
    <Card.Body>
      <Card.Text className="border-top p-3 ">
     
                   
      <Link to="/adminlogin" ><i><h3>Admin Login</h3> </i></Link>
      </Card.Text>
      
    </Card.Body>
  </Card>
</div>
</div>
  </div>
                <div className="col-md-6 col-lg-6 col-sm-12 col-xl-6 ">
                <div className="bx-shadw">
                <Card className="text-center">
                <Card.Img variant="top" src="/images/user-log.png" className="img-fluid" />
                <Card.Body>
               
                <Card.Text className="border-top p-3 "><Link to="/userlogin"><i><h3>user Login/register</h3></i></Link></Card.Text>  </Card.Body>
                </Card>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Home;