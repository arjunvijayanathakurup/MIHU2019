import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Maps extends React.Component {
  render() {
    return (
        <div className="container">
            
            <LeafletMap
            center={[9.093971, 76.492608]}
            zoom={18}
            maxZoom={20}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            
        >
            <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={[9.093971, 76.492608]}>
            <Popup>
                MCA class room (First)
            </Popup>
            </Marker>
            </LeafletMap>
        </div>
      
    );
  }
}

export default Maps
// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '90vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyAnLmZk82JFnrUsUHzcWQrLZs3r3pna4yk" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default SimpleMap;