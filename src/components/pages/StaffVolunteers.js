import React, {useState} from 'react';
import MaterialTable from 'material-table';

// stadd_volunteers{NAME DEPARTMENT SEVA contact}

export default function StaffVolunteer() {
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
    { title: 'Department', field: 'department', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
             
        color: 'white'
      } },
    { title: 'Seva', field: 'seva' , 
      cellStyle: {
        background: 'inherit',
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
      { name: 'Arjun',department: 'MCA',seva: 'MIHU',  contact: '9786576998' },
      { name: 'Arjun',department: 'MCA',seva: 'MIHU',  contact: '9786576998' },
      { name: 'Arjun',department: 'MCA',seva: 'MIHU',  contact: '9786576998' }
    ],
  });
//   
  return (
      <div className="" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Staff Volunteers"
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
