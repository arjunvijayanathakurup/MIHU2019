import React from 'react';
import MaterialTable from 'material-table';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function ManageDarshan() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Date', field: 'date', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
         
        color: 'white'
      }
    },
      { title: 'Darshan TIme', field: 'darshan_time', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
         
        color: 'white'
      } },
      { title: 'Token Location', field: 'token_loc', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
         
        color: 'white'
      }},
      { title: 'Token Time', field: 'token_time' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
         
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
            
            title="Darshan Timings"
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
