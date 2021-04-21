import React from 'react'
import { Redirect, Route } from 'react-router';

const Protected = ({component :Cmp,...rest}) => (
  <Route
  {...rest}
  render = {(props)=>
      localStorage.getItem('userlogin') ?(
            <Cmp {...props} />
      ):
      <Redirect 
      to = "/userlogin" 

      />

  }
   />
  

  
   
);

export default Protected
