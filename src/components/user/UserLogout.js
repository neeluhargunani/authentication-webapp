import React from 'react'
import {Redirect} from 'react-router-dom';


const UserLogout = () => {
    localStorage.clear();
    return <Redirect to ="userlogin"/>
}

export default UserLogout
