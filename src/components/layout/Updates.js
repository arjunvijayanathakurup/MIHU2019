import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Updates() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://mihu.amrita.ac.in/live')
    .then(json => setData(json.data))
    .catch((error) => {
      console.log(error);
    })
    
  }, [])


    return(
      <>
        <marquee behavior="scroll" direction="left">
        {data.map((data) =><> 
                {data.live}
                <>&nbsp;</>
                <>&nbsp;</>
                <>&nbsp;</>
                <>&nbsp;</>
                </>
                )}
          </marquee> 
      </>
    )
  }
