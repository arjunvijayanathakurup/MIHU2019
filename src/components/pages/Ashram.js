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
        
        color: 'white'
      }
    },
      { title: 'Seva Location', field: 'seva_location', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      } },
      { title: 'Incharge', field: 'incharge', 
      cellStyle: {
        background: "inherit",
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
      
      
    ],
    data: [
      
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
