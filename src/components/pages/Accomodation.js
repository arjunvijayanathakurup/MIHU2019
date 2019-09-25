import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Accommodation() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5000/accomodations')
    .then(json => setData(json.data))
    .catch((error) => {
      console.log(error);
    })
  }, [])
  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Gender', field: 'gender', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }
    },
      { title: 'Area Name', field: 'areaname', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      } },
      { title: 'Location', field: 'locationOfAcc', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }},
      { title: 'Category', field: 'category' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }},
      
      { title: 'Coordinator', field: 'coord' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }},
      { title: 'Contact', field: 'contact' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }},
      { title: 'Status', field: 'isFull' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }}
      
    ],

  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Accommodation"
            columns={state.columns}
            data={data}
            options={{
              
              headerStyle: {
                  borderTop: 'white solid 1px',
                    background: 'inherit',
                    color: 'white',
                    fontSize: '0.9em',
                    fontWeight: 600,
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
