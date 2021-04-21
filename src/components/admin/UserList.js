import React, { Component } from 'react'
import { Table, Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


import NavbarMenu from '../NavbarMenu';

 class UserList extends Component {
    constructor() {
        super();
        this.state = {
            userList:null,
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData()
    {
      fetch("http://my-json-server.typicode.com/neeluhargunani/apijson/registration").then((response) =>{
          response.json().then((result) =>{
             
              this.setState({userList:result})
          })
      })
    }
    reduce(id)
    {
        fetch('http://my-json-server.typicode.com/neeluhargunani/apijson/registration/' + id,{
           method:"DELETE",
          }).then((result) => {
           result.json().then((resp) => {
               alert('user Had Been Deletedf from the list')
               this.getData()
           })
       })
    }
    render()  
    {
        return (
            <>
     <NavbarMenu/>

            <div className="container">
            <div className="row">
            <div className="col-md-12 col-xl-12 col-sm-12 col-lg-12 mrg-t">
            {
                this.state.userList?
              
                <div className="limiter">
                <Card>
                    <Card.Title className="text-center"><h3>User List</h3></Card.Title>
                    <div className="table-responsive">
                <Table className="table table-striped table-hover">
              
                <thead className="bg-purple">
              <tr>
              <th>#</th>
               <th>Name</th>
                <th>Email</th>
                    <th>password</th>
                    <th>Location</th>
                    <th>profile</th>
                    <th>Operations</th>
               </tr>
               </thead>
               <tbody>

                  {
                      this.state.userList.map((item, i)=>
                          
                           <tr>
                         
                           <td> {item.id}</td>
                          <td> {item.name}</td>
                          <td>{item.email}</td>
                           <td>{item.password}</td>
                        <td>{item.address}</td>
                        <td><Link to={"/userdetails/" + item.id}>View user</Link></td> 
                        <span> <Link to={"/userupdate/" + item.id}><FontAwesomeIcon icon={faEdit} color="orange" title="edit"/></Link></span>
                        <span onClick={()=>this.reduce(item.id)}><FontAwesomeIcon icon={faTrash} color="red" title="delete"/></span>
                     </tr>
                           )
                  }
                  
                  </tbody>
                  </Table>
                  </div>
                  </Card>
                </div>
                
                :<p>Please Wait ....</p>
              
            }
            </div>
            </div>
            </div>
            </>
        )
    }
}
export default UserList;