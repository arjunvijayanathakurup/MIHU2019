import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';



// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Info() {

  const [data, setData] = useState([]);

useEffect(() => {
  axios.get('https://mihu.amrita.ac.in/information')
  .then(json => setData(json.data))
  .catch((error) => {
    console.log(error);
  })
}, [])
  const [state, setState] = React.useState({
    columns: [
      { title: 'Schedule', field: 'message', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
            
        color: 'white'
      }
    } ,
    { title: 'Date', field: 'date', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
            
        color: 'white'
      }
    } ,
    { title: 'Time', field: 'time', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
            
        color: 'white'
      }
    } 
      
    ],
    data
  });
   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Information & Schedule"
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
            {/* <h3 style={{ marginBottom: "10px", marginTop: "30px", textDecoration: "underline"}}></h3> */}
            
            
            

      </div>
    
  );
}
