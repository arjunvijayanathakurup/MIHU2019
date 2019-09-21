import React, {useState} from 'react';
import MaterialTable from 'material-table';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }
// transportations{ MODE BUSNO CONTACT FROM DESTINATION DEPTIME PARKING }
export default function ManageTransportation() {
  const [state, setState] = useState({
    columns: [
      { title: 'Mode', field: 'mode', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }
    },
      { title: 'Bus No', field: 'bus', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      } },
      { title: 'Contact', field: 'contact', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }},
      { title: 'Departure', field: 'depart' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }},
      
      { title: 'Destination', field: 'destin' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }},
      { title: 'Departure Time', field: 'dtime' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }},
      { title: 'Parking', field: 'parking' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
          
        color: 'white'
      }}
      
    ],
    data: [
      
    ],
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Transportation"
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
