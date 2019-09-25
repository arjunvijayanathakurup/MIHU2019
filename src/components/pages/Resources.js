import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';



// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Resources() {

  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Title', field: 'title', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
            
        color: 'white'
      }
    } ,
    { title: 'Link', field: 'link', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
            
        color: 'white'
      }
    } 
    
      
    ],
    data: [
        {title: "Other Campus Duty List", link: "https://gofile.io/?c=TmmbZ1"},
        
    ],
  });
   
  return (
      <div> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Resources"
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
            {/* <h3 style={{ marginBottom: "10px", marginTop: "30px", textDecoration: "underline"}}></h3> */}
            
            
            

      </div>
    
  );
}
