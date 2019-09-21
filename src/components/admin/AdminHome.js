import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import Carousel from 'react-bootstrap/Carousel'
class Home extends Component{
    render(){

        return (
            <div className="container" >
                <h3 style={{marginBottom: "15px"}}>Manage modules</h3>
                    {/* <hr style={{borderBottom: "white solid 1px",marginBottom: "10px"}}/> */}
                    <div className="row" >
                        <div className="col-xs-12 col-lg-3 col-sm-6 thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/admin/accommodation">
                                <div className="center-vh c1" >
                                    <i className="fa fa-building" ></i>
                                    <h5>Accommodation</h5>
                                </div>     
                            </Link>
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
                            
                            
                            <div className="middle zoom">
                            <Link to="/admin/darshan">
                                <div className="center-vh c1" >
                                    <i className="fa fa-users" ></i>
                                    
                                    <h5> Darshan</h5>
                                </div>  
                            </Link>   
                            </div> 
                            
                        </div>
                        
                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/admin/food">
                                <div className="center-vh c1" >
                                    <i className="fa fa-cutlery " ></i>
                                    <h5>Food</h5>
                                </div>  
                                </Link>   
                            </div> 
                            
                        </div>
                        
                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/admin/transportation">
                                <div className="center-vh c1" >
                                    <i className="fa fa-train" ></i>
                                    <h5>Transportation</h5>
                                </div>     
                                </Link>
                            </div> 
                            
                        </div>

                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to="/admin/emergency">
                                <div className="center-vh c1" >
                                    <i className="fa fa-ambulance" ></i>
                                    <h5>Emergency</h5>
                                </div>  
                                </Link>   
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to='/admin/coordinator'>
                                    <div className="center-vh c1" >
                                        <i className="fa fa-street-view" ></i>
                                        <h5>Coordinators</h5>
                                    </div>
                                </Link>     
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to='/volunteer'>
                                    <div className="center-vh c1" >
                                        <i className="fa fa-male" ></i>
                                        <h5>Volunteers</h5>
                                    </div>  
                                </Link>
                            </div> 
                        </div>

                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <div className="center-vh c1" >
                                    <i className="fa fa-map" ></i>
                                    <h5>Map</h5>
                                </div>     
                            </div> 
                        </div>

                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/info">
                                <div className="center-vh c1" >
                                    <i className="fa fa-info-circle" ></i>
                                    <h5>Schedule</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/VCC">
                                <div className="center-vh c1" >
                                    <i className="fa fa-handshake-o " ></i>
                                    <h5>VCC</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/ashram">
                                <div className="center-vh c1" >
                                    <i className="fa fa-user " ></i>
                                    <h5>Ashram</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>

                        <div className="col-xs-12 col-lg-3 col-sm-6  thumb outer-div">
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