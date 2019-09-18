import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = (props) => {
    
    return (
        <nav className="navbar navbar-expand-md navbar-dark container" style="margin-bottom: 10px; margin-top: 5px;">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            
            
        </ul>
    </div>
    <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto h-style" href="#" style="font-family: 'Cabin', sans-serif;">May I help you?</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto" style="display: inline-block;">
            <li className="nav-item" style="display: inline-block;">
                <a className="nav-link" href="#"><i className="fa fa-home" style="font-size: 1.7em; "></i></a>
            </li>
            <li className="nav-item" style="display: inline-block;">
                <a className="nav-link" href="#"><i className="fa fa-bell" style="font-size: 1.3em; "></i></a>
            </li>
        </ul>
    </div>

</nav>
        
    )

}

export default Navbar