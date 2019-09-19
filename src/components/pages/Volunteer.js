import React, {useState} from 'react';
import MaterialTable from 'material-table';

// volunteers{ name batch campus CONTACT SEVA CORDNAME CORDCONTACT

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
      { title: 'Batch', field: 'batch', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      } },
      { title: 'Campus', field: 'campus', 
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
      
      { title: 'Seva', field: 'seva' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      }},
      { title: 'Coordinator Name', field: 'cordname' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      }},
      { title: 'Coordinator Contact', field: 'cordcontact' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      }}
      
    ],
    data: [
      { name: 'Arjun', batch: 'MCA', campus: 'Amritapuri', contact: '9786576998', seva: 'MIHU', cordname: 'sdfasd', cordcontact: 'ssdfsdf' },
      { name: 'Arjun', batch: 'MCA', campus: 'Amritapuri', contact: '9786576998', seva: 'MIHU', cordname: 'sdfasd', cordcontact: 'ssdfsdf' },
      { name: 'sdf', batch: 'dfd', campus: 'sdfsfd', contact: '233', seva: 'sdfsdf', cordname: 'dff', cordcontact: 'ewq' },

    ],
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Volunteers"
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