import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

function PrivateRoute(props) {
    const [isLoggedin, setIsLoggedin]=useState(localStorage.getItem("loggedin"));
    return (
        <>
        {props.children}
         {isLoggedin===null && <Redirect to="/login" />} 
        </>
    )
}

export default PrivateRoute;