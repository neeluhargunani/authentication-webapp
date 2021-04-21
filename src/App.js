import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AdminLogin from './components/admin/AdminLogin';
import Registration from './components/user/Registration';
import UserList from './components/admin/UserList';
import UserUpdate from './components/admin/UserUpdate';
import UserDetails from './components/admin/UserDetails';
import UserLogin from './components/user/UserLogin';
import ProductDetails from './components/user/ProductDetails';
import UpdateProduct from './components/user/UpdateProduct';
import ProductList from './components/user/ProductList';

import UserLogout from './components/user/UserLogout';
function App() {
  return (
    <Router>
    <div>
    <Route exact path= '/'> <Home/></Route>
    <Route exact path = "/registration">
        <Registration/>
      </Route>
      <Route exact path = "/userlist">
        <UserList/>
      </Route>
      <Route exact path = "/productlist">
        <ProductList/>
      </Route>
      <Route exact path = "/userupdate/:id" render={props=>(
      <UserUpdate {...props} />
      )}>
      </Route>
      <Route exact path = "/userdetails/:id" render={props=>(
      <UserDetails {...props} />
      )}>
      </Route>
     
      <Route exact path = "/updateproduct/:id" render={props=>(
      <UpdateProduct {...props} />
      )}>
      </Route>
      <Route exact path = "/productdetails/:id" render={props=>(
      <ProductDetails {...props} />
      )}>
      </Route>
      <Route exact path ="/userlogin" render={props=>(
      <UserLogin {...props} />
  )}></Route>
    <Route exact path ="/adminlogin" render={props=>(
      <AdminLogin {...props} />
  )}></Route>
   <Route path = "/userlogout">
        <UserLogout/>
      </Route>
     
    </div>
    </Router>
  );
}

export default App;
