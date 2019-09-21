import React from 'react';
import MaterialTable from 'material-table';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Food() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Meal', field: 'meal', 
      cellStyle: {
        background: "inherit",
        borderLeft: "none",
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }
    },
      { title: 'TIme', field: 'time', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      } },
      { title: 'Location', field: 'location', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }},
      { title: 'Counter', field: 'counter' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }},
      
      
    ],
    data: [
      { meal: 'Putte', time: '9:20 pm', counter: "entrance", location: 'Canteen' },
      { meal: 'Chappathi', time: '9:20 pm', counter: "ashram", location: 'Canteen' },
      { meal: 'Putte', time: '9:20 pm', counter: "entrance", location: 'Canteen' },
      { meal: 'Chappathi', time: '9:20 pm', counter: "ashram", location: 'Canteen' },
      { meal: 'Putte', time: '9:20 pm', counter: "entrance", location: 'Canteen' },
      { meal: 'Chappathi', time: '9:20 pm', counter: "ashram", location: 'Canteen' },
      { meal: 'Putte', time: '9:20 pm', counter: "entrance", location: 'Canteen' },
      { meal: 'Chappathi', time: '9:20 pm', counter: "ashram", location: 'Canteen' }
    ],
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Food & Drinks"
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
