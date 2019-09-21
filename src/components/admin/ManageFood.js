import React from 'react';
import MaterialTable from 'material-table';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function ManageFood() {
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
      { meal: 'Putte', time: '9:20 pm', counter: "entrance", location: 'Canteen' },
      { meal: 'Chappathi', time: '9:20 pm', counter: "ashram", location: 'Canteen' },
      { meal: 'Putte', time: '9:20 pm', counter: "entrance", location: 'Canteen' },
      { meal: 'Chappathi', time: '9:20 pm', counter: "ashram", location: 'Canteen' },
      { meal: 'Putte', time: '9:20 pm', counter: "entrance", location: 'Canteen' },
      { meal: 'Chappathi', time: '9:20 pm', counter: "ashram", location: 'Canteen' },
      { meal: 'Putte', time: '9:20 pm', counter: "entrance", location: 'Canteen' },
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
            editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
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
