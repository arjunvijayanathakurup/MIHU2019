import React from 'react';
import MaterialTable from 'material-table';

export default function ManageAccomodation() {
    const [state, setState] = React.useState({
        columns: [
          { title: 'Gender', field: 'gender', 
          cellStyle: {
            background: "inherit",
            color: '#FFF'
          },
          headerStyle: {
            
            color: 'white'
          }
        },
          { title: 'Area Name', field: 'area_name', 
          cellStyle: {
            background: "inherit",
            color: '#FFF'
          },
          headerStyle: {
            
            color: 'white'
          } },
          { title: 'Location', field: 'loc', 
          cellStyle: {
            background: "inherit",
            color: '#FFF'
          },
          headerStyle: {
            
            color: 'white'
          }},
          { title: 'Category', field: 'categ' , 
          cellStyle: {
            background: 'inherit',
            color: '#FFF'
          },
          headerStyle: {
            
            color: 'white'
          }},
          
          { title: 'Coordinator', field: 'coord' , 
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
          { title: 'Status', field: 'status' , 
          cellStyle: {
            background: 'inherit',
            color: '#FFF'
          },
          headerStyle: {
            
            color: 'white'
          }}
          
        ],
        data: [
          { gender: 'Male', area_name: 'amritapuri', loc: "entrance", token_time: '9:20 pm' },
          { gender: 'Female', area_name: 'amritapuri', loc: "ashram", token_time: '9:20 pm' }
        ],
      });
    //   
      return (
          <div className="container" style={{border: "none"}}> 
            <MaterialTable
            style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
                
                title="Accommodation"
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
