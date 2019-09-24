import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function ManageAshram() {

const [data, setData] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/ashram')
  .then(json => setData(json.data))
  .catch((error) => {
    console.log(error);
  })
}, [])

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
      { title: 'Seva Location', field: 'sevaPlace', 
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
    data
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Ashram Volunteers"
            columns={state.columns}
            data={data}
            editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              axios.post('http://localhost:5000/ashram/add', newData)
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
