import React from 'react';
import '../assets/css/navbar.css'

function Navbar(props){
    return(
        <div className="navbar">
            <div className="navbar-body">{props.name}</div>
        </div>
    )
}

export default Navbar