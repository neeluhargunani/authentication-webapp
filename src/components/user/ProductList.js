import React, { Component } from 'react'

import { Table, Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import MenuUser from '../MenuUser'


 class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            list:null,
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData()
    {
      fetch("http://my-json-server.typicode.com/neeluhargunani/apijson/restaurant/").then((response) =>{
          response.json().then((result) =>{
             
              this.setState({list:result})
          })
      })
    }
    delete(id)
    {
        fetch('http://my-json-server.typicode.com/neeluhargunani/apijson/restaurant/' + id,{
           method:"DELETE",
          }).then((result) => {
           result.json().then((resp) => {
               alert('Restaurant Had Been Deleted')
               this.getData()
           })
       })
    }
   render() {
      
       return (
           <>
  <MenuUser/>
           <div className="container ">
               <div className="row">
               <div className="col-md-12 col-xl-12 col-sm-12 col-lg-12 mrg-t">
                {
                    this.state.list?
                    <div className="limiter">
                    <Card>
                    <Card.Title className="text-center"><h3>Product List</h3></Card.Title>
                    <div className="table-responsive">
                    <Table className="table table-striped table-hover">
                 
                    <thead className="bg-purple">
                  <tr>
                     <th>#</th>
                   <th>Name</th>
                    <th>Email</th>
                        <th>Rating</th>
                        <th>Location</th>
                        <th>Product Details</th>
                        <th>Operations</th>
                   </tr>
                   </thead>
                   <tbody>

                      {
                          this.state.list.map((item, i)=>
                              
                               <tr>
                               <td> {item.id}</td>
                              <td> {item.name}</td>
                              <td>{item.email}</td>
                               <td>{item.rating}</td>
                            <td>{item.address}</td>
                            <td><Link to={"/productdetails/" + item.id}>view details</Link></td>
                            <span> <Link to={"/updateproduct/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange" title="edit"/></Link></span>
                            <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" title="delete"/></span>
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
export default ProductList;