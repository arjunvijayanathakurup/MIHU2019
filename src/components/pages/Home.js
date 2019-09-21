import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component{
    render(){

        return (
            <div className="container1" >
                    <div className="notification hide-notification" >
                        <div className="notification-main">
                        <h5 style={{fontStyle:"normal"}}>Notifications</h5>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="notification-section">  
                                        <h6>
                                            <i class="fa fa-star" aria-hidden="true" style={{fontSize:"1em", marginRight: "8px"}}></i>
                                            Hello!
                                        </h6> 
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="notification-section">  
                                        <h6>
                                            <i class="fa fa-star" aria-hidden="true" style={{fontSize:"1em", marginRight: "8px"}}></i>
                                            Welcome to MIHU!!
                                        </h6> 
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="notification-section">  
                                        <h6>
                                            <i class="fa fa-star" aria-hidden="true" style={{fontSize:"1em", marginRight: "8px"}}></i>
                                            Made by CSA dept!
                                        </h6> 
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="notification-section">  
                                        <h6>
                                            <i class="fa fa-star" aria-hidden="true" style={{fontSize:"1em", marginRight: "8px"}}></i>
                                            Lorem ipsum !
                                        </h6> 
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="notification-section">  
                                        <h6>
                                            <i class="fa fa-star" aria-hidden="true" style={{fontSize:"1em", marginRight: "8px"}}></i>
                                            Food available at Amriteshwari hall!
                                        </h6> 
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>	
                    <div className="row" >
                        <div className="col-xs-12 col-lg-4 col-sm-6 thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/accommodation">
                                <div className="center-vh c1" >
                                    <i className="fa fa-building" ></i>
                                    <h5>Accommodation</h5>
                                </div>     
                            </Link>
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            
                            
                            <div className="middle zoom">
                            <Link to="/darshan">
                                <div className="center-vh c1" >
                                    <i className="fa fa-users" ></i>
                                    
                                    <h5>Darshan</h5>
                                </div>  
                            </Link>   
                            </div> 
                            
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/food">
                                <div className="center-vh c1" >
                                    <i className="fa fa-cutlery " ></i>
                                    <h5>Food</h5>
                                </div>  
                                </Link>   
                            </div> 
                            
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/transportation">
                                <div className="center-vh c1" >
                                    <i className="fa fa-train" ></i>
                                    <h5>Transportation</h5>
                                </div>     
                                </Link>
                            </div> 
                            
                        </div>

                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to="/emergency">
                                <div className="center-vh c1" >
                                    <i className="fa fa-ambulance" ></i>
                                    <h5>Emergency</h5>
                                </div>  
                                </Link>   
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to='/coordinator'>
                                    <div className="center-vh c1" >
                                        <i className="fa fa-street-view" ></i>
                                        <h5>Coordinators</h5>
                                    </div>
                                        
                                </Link>     
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to='/volunteer'>
                                    <div className="center-vh c1" >
                                        <i className="fa fa-male" ></i>
                                        <h5>Volunteers</h5>
                                    </div>  
                                </Link>
                            </div> 
                        </div>

                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <div className="center-vh c1" >
                                    <i className="fa fa-map" ></i>
                                    <h5>Map</h5>
                                </div>     
                            </div> 
                        </div>

                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/info">
                                <div className="center-vh c1" >
                                    <i className="fa fa-info-circle" ></i>
                                    <h5>Info</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/VCC">
                                <div className="center-vh c1" >
                                    <i className="fa fa-handshake-o " ></i>
                                    <h5>VCC</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/ashram">
                                <div className="center-vh c1" >
                                    <i className="fa fa-user " ></i>
                                    <h5>Ashram</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>

                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <div className="center-vh c1" >
                                    <i className="fa fa-question-circle" ></i>
                                    <h5>FAQ</h5>
                                </div>     
                            </div> 
                        </div>
                        
                        
                        
                        
                    </div>
            </div>
        )

    }
    
}

export default Home