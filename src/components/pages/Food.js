import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

// darshans{ DATE DARSHAN_TIME TOKEN_LOC TOKEN_TIME }

export default function Food() {


  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('https://mihu.amrita.ac.in/food')
  //   .then(json => setData(json.data))
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }, [])

  const [state, setState] = React.useState({
    columns: [
      { title: 'Meal', field: 'meal', 
      cellStyle: {
        background: "inherit",
        borderLeft: "none",
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }
    },
      { title: 'TIme', field: 'time', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      } },
      { title: 'Location', field: 'place', 
      cellStyle: {
        background: "inherit",
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }},
      { title: 'Counter', field: 'counter' , 
      cellStyle: {
        background: 'inherit',
        color: '#FFF'
      },
      headerStyle: {
        
        color: 'white'
      }},
      
      
    ],
    data: [
      {meal: "Breakfast",time:"8 am - 26th, 27th September",place: "College", counter: "3", },
      {meal: "Breakfast ",time:"8 am - 26th, 27th September",place: "Ashram", counter: "3", },
      {meal: "Lunch ",time:"12pm - 26th, 27th September",place: "College", counter: "3", },
      {meal: "Lunch ",time:"12pm - 26th, 27th September",place: "Ashram", counter: "3", },
      {meal: "Dinner ",time:"7pm - 26th September",place: "Ashram", counter: "3", },
      {meal: "Dinner ",time:"7pm - 27th September",place: "College", counter: "3", },
      {meal: "Dinner ",time:"7pm - 27th September",place: "Ashram", counter: "3", }
    ]
  });
//   
  return (
      <div className="container" style={{border: "none"}}> 
        <MaterialTable
        style={{backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", borderRadius:"0px", border: "none"}}
            
            title="Food & Drinks"
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
