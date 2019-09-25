import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import MaterialTable from 'material-table';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Notifications() {
     
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get('https://mihu.amrita.ac.in/live')
      .then(json => setData(json.data))
      .catch((error) => {
        console.log(error);
      })
      
    }, [])

  return (
      <div className="notification hide-notification container1" >
            <div className="notification-main">
                <h5 style={{fontStyle:"normal"}}>Notifications</h5>
                    <div className="row">
                        {data.map((data) =>
                            <div className="col-xs-12 col-sm-6 p-4">
                                <div className="notification-section">  
                                    <h6>
                                        <i class="fa fa-star" aria-hidden="true" style={{fontSize:"1em", marginRight: "8px"}}></i>
                                        {data.live}
                                    </h6> 
                                </div>
                            </div>
                        )}
                    </div>
                    
                    
                </div>
            </div>

  );
}
