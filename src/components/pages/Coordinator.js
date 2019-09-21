import React, {useState} from 'react';
import MaterialTable from 'material-table';

// coordinators{ NAME SEVA DEPARTMENT CONTACT}

export default function Volunteer() {
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
    data: [
      { name: 'Abhilash',seva: 'MIHU', department: 'MCA', contact: '9567347371' },
      { name: 'Arjun',seva: 'MIHU', department: 'MCA', contact: '9786576998' },
      { name: 'Malavika',seva: 'MIHU', department: 'MCA', contact: '9786576998' }
    ],
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"5px", border: "none"}}
            
            title="Coordinator"
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
