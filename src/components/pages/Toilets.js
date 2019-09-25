import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';



// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Toilets() {

  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Area', field: 'area', 
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
        {area: "Ashram", location: "Alagapuri"},
        {area: "Ashram", location: "Backside of E block (Amrita Darshanam) "},
        {area: "Ashram", location: "Backside of AmritaKripa hospital "},
        {area: "Birthday Venue", location: "Near prabhakaranji store/carpool "},
        {area: "Birthday Venue", location: "West of Pandhal"},
        {area: "Birthday Venue", location: "East of Pandhal"},
        {area: "Girls Hostel", location: "Opp. to girl’s mess hall "},
        {area: "Girls Hostel", location: "Near biotech rainwater harvest "}
    ],
  });
   
  return (
      <div> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Toilets"
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
