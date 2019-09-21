import React from 'react';
// import MaterialTable from 'material-table';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Notifications() {
     
  return (
      <div className="notification hide-notification container2" >
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

  );
}
