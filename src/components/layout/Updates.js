import React from 'react'

export default class Updates extends React.Component {

  createUpdates = () => {
    
      let updates = []
      //Inner loop to create children
      for (let j = 0; j < 5; j++) {
        updates.push(<div >{`Token No: ${j + 1}`}</div>)
      }
     
    return updates
  }


  render() {
    return(
        <div id="slideshow">
            {this.createUpdates()}
        </div>
    )
  }

}