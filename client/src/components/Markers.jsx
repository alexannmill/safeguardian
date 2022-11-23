import { Marker, Popup} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import { useState } from "react";

function Markers(props) {

  //props location
  //set location



  // const renderMarkers = props.resources.map((resource) => {
  //   return
  //   <Marker 
  //   key={resource}

  //   />
  // })

  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [20, 30],
    // iconAnchor: [1, 1],
    // popupAnchor: [-0, -76]
  });

  return props.position === null ? null : (
    <Marker position={props.position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default Markers;
