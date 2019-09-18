import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = (props) => {
    
    return (
        <nav className="navbar navbar-expand-md navbar-dark container nav1" >
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            
            
        </ul>
    </div>
    <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto h-style nav2" href="#" >May I help you?</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto nav3" >
            <li className="nav-item nav3">
                <a className="nav-link " href="#"><i className="fa fa-home nav4" ></i></a>
            </li>
            <li className="nav-item nav3">
                <a className="nav-link" href="#"><i className="fa fa-bell nav5"></i></a>
            </li>
        </ul>
    </div>

</nav>
        
    )

}

export default Navbar