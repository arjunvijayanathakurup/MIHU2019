import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import map1 from  './img/map1.png'
import map2 from './img/map2.png';

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
                Amrita Vishwa Vidyapeetham
            </Popup>
            </Marker>
            </LeafletMap>
            <hr/>
            <h3 style={{ marginBottom: "10px", marginTop: "30px", textDecoration: "underline"}}>More</h3>
            <img src={map1} style={{width: "100%", marginBottom: "10px", marginTop: "10px"}}/>
            <img src={map2} style={{width: "100%" , marginBottom: "10px"}} />

        </div>
      
    );
  }
}

export default Maps