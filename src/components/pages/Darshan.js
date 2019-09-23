import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Darshan() {

  const [data, setData] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/darshan')
  .then(json => setData(json.data))
  .catch((error) => {
    console.log(error);
  })
}, [])

  const [state, setState] = React.useState({
    columns: [
      { title: 'Token Number', field: 'token', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
         
        color: 'white'
      }
    },
      { title: 'Date', field: 'date', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
         
        color: 'white'
      } },
      { title: 'Darshan Time', field: 'darshanTime', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
         
        color: 'white'
      }},
      { title: 'Token Location', field: 'tokenLocation' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
         
        color: 'white'
      }},
      { title: 'Token Time', field: 'tokenTime' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
         
        color: 'white'
      }},
      
      
    ],
    data: [
      {token: data.token, date: data.date, darshanTime: data.darshanTime, tokenLocation: data.tokenLocation, tokenTime: data.tokenTime }
    ]
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Darshan Timings"
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
