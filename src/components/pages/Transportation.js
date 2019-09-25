import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }
// transportations{ MODE BUSNO CONTACT FROM DESTINATION DEPTIME PARKING }
export default function Transportation() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://mihu.amrita.ac.in/transportation')
    .then(json => setData(json.data))
    .catch((error) => {
      console.log(error);
    })
  }, [])

  const [state, setState] = useState({
    columns: [
      { title: 'Mode', field: 'mode', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }
    },
      { title: 'Bus No', field: 'busno', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      } },
      { title: 'Contact', field: 'contact', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }},
      { title: 'Departure', field: 'froms' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }},
      
      { title: 'Destination', field: 'destination' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }},
      { title: 'Departure Time', field: 'deptime' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }},
      { title: 'Parking', field: 'parking' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }}
      
    ],
    data
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Transportation"
            columns={state.columns}
            data={data}
            options={{
                headerStyle: {
                  borderTop: 'white solid 1px',
                    background: 'inherit',
                    color: 'white',
                    fontSize: '0.9em',
                    fontWeight: 600,
                    color: 'white'
                },
                searchFieldStyle: {
                    background: 'inherit',
                    color: 'white',
                    padding: "5px"
                },
            }}
            />

      </div>
    
  );
}
