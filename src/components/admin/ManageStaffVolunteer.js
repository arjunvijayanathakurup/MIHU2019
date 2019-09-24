import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';


// stadd_volunteers{NAME DEPARTMENT SEVA contact}

export default function ManageStaffVolunteer() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/staffvolunteer')
    .then(json => setData(json.data))
    .catch((error) => {
      console.log(error);
    })
  }, [])
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
    { title: 'Department', field: 'department', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white'
      } },
    { title: 'Seva', field: 'seva' , 
      cellStyle: {
        background: 'inherit',
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
    data
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Staff Coordinator"
            columns={state.columns}
            data={data}
            editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              axios.post('http://localhost:5000/staffvolunteer/add', newData)
              .then(res => console.log(res.data));
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
