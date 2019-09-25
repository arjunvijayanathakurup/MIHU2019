import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

// coordinators{ NAME SEVA DEPARTMENT CONTACT}

export default function Coordinator() {


  const [data, setData] = useState([]);

useEffect(() => {
  axios.get('https://localhost:5000/coordinator')
  .then(json => setData(json.data))
  .catch((error) => {
    console.log(error);
  })
}, [])
  const [state, setState] = useState({
    columns: [
      { title: 'Name', 
      field: 'name', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
             
        color: 'white'
      }
    },
    { title: 'Seva', field: 'seva' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
             
        color: 'white'
      }},
      { title: 'Department', field: 'department', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
             
        color: 'white'
      } },
      { title: 'Contact', field: 'contact' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
             
        color: 'white'
      }},
      
    ],
    data
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"5px", border: "none"}}
            
            title="Coordinators"
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
