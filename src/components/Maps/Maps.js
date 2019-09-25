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