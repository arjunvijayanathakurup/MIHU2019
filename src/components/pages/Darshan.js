import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import malayalam from './img/malayalam.png'
import tamil from './img/tamil.png'
import english from './img/english.png'

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Darshan() {

  const [data, setData] = useState([]);

useEffect(() => {
  axios.get('https://mihu.amrita.ac.in/darshan')
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
      <div className="container1" style={{border: "none"}}> 
        {/* <MaterialTable
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
            /> */}
            <img src={english} alt="English" style={{width: "100%" , marginBottom: "10px",  marginTop: "10px"}}/>
            <img src={malayalam} alt="Malayalam" style={{width: "100%", marginBottom: "10px"}}/>
            <img src={tamil} alt="Tamil" style={{width: "100%" , marginBottom: "10px"}} />
      </div>
    
  );
}
