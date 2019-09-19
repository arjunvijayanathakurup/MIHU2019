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
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      }
    },
    { title: 'Seva', field: 'seva' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      }},
      { title: 'Department', field: 'department', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      } },
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
      { name: 'Arjun',seva: 'MIHU', department: 'MCA', contact: '9786576998' },
      { name: 'Arjun',seva: 'MIHU', department: 'MCA', contact: '9786576998' },
      { name: 'Arjun',seva: 'MIHU', department: 'MCA', contact: '9786576998' }
    ],
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Coordinator"
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
