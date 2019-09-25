import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';



// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function BuildingLocations() {

  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Building Name', field: 'bldg', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
            
        color: 'white'
      }
    } ,
    { title: 'Location', field: 'location', 
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
        {bldg: "Amritanjali", location: "North side"},
        {bldg: "Amrita Kala", location: "Nr. ATM"},
        {bldg: "Amritasree, Amrita Varshini, Nr.Girls Hostel", location: "North side"},
        {bldg: "Amrita Sindhu", location: "Behind Ele Room (auto stand)"},
        {bldg: "Amrita Darshan", location: "Infront of Accommodation"},
        {bldg: "MAM", location: "Kali Temple"},
    ],
  });
   
  return (
      <div> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Building Names and Locations"
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
