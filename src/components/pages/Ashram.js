import React from 'react';
import MaterialTable from 'material-table';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Darshan() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Section', field: 'section', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      }
    },
      { title: 'Seva Location', field: 'seva_location', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      } },
      { title: 'Incharge', field: 'incharge', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      }},
      { title: 'Contact', field: 'contact' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      }},
      
      
    ],
    data: [
      { date: '22/05/2019', darshan_time: '9:20 pm', token_loc: "entrance", token_time: '9:20 pm' },
      { date: '22/05/2019', darshan_time: '9:20 pm', token_loc: "ashram", token_time: '9:20 pm' }
    ],
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Ashram Volunteers"
            columns={state.columns}
            data={state.data}
            options={{
                headerStyle: {
                    background: 'rgba(0, 0, 0, 0.6)',
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
