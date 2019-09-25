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
        {bldg: "Sreepuram", location: "International office "},
        {bldg: "Amrita Priya, Amritaprabha & Panchammi", location: "Behind Public tele phonebooth"},
        {bldg: "Gargi Bhavan", location: "Bri Bldg"},
        {bldg: "Amrita Kamal", location: "Nr.Bookstall "},
        {bldg: "Amritarppan", location: "Common toilet bldg"},
        {bldg: "Bhakthi Bhavan", location: "Br. mess hall"},
        {bldg: "Kailas Bhavan", location: "Nr Kitchen"},
        {bldg: "Agastya Bhavan", location: "Matruvani Bldg"},
        {bldg: "Gouthama Bhavan", location: "Music Shop Bldg"},
        {bldg: "Nachiketha Bhavan", location: "Huts-nr Ammas room"},
        {bldg: "Mata", location: "Tsunami House-nr Amma's room"},
        {bldg: "Aaruni Bhavan", location: "Beside the tsunami house"},
        {bldg: "Amrita Sagar", location: "Seashore bldg"},
        {bldg: "Amba", location: "behind old Kitchen"},
        {bldg: "Vyasa Bhavan", location: "behind stage (Br. Bldg)"},
        {bldg: "Valmeeki Bhavan", location: "Cloack room bldg"},
        {bldg: "Kashyapa Bhavan", location: "Carpool bldg"},
        {bldg: "Amritakshari Bhavan", location: "Above new printing press"},
        {bldg: "Amrita Kiran, Sahyadri, Amrita Nihar", location: "Nr Hospital"},
        {bldg: "Kapila, Kaivalya, Paraasara and Amrita Kedar, Prahlada", location: "Horticulture(South Side)"},
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
