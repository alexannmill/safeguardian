// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import Markers from "./Markers";
import axios from "axios"


export default function Map() {

  const position = [49.2827, -123.1207];

  const [resources, setResources] = useState(null)

  // useEffect(() => {
  //   axios
  //   .get(`https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations&q=&lang=en&rows=80&facet=facility&facet=category&facet=meals&facet=pets&facet=carts&facet=geo_local_area`)
  //     .then((res => {
  //       const incomingData = res.data.records;
  //       console.log('incomingData:', incomingData);
  //       setResources(incomingData);
  //     }))
  // },[])


  return (
    <section className="map-component">
        <MapContainer 
          center={position} 
          zoom={14.5} 
          scrollWheelZoom={false}
          >
          <TileLayer
            attribution='&copy; <a 
            href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markers key={position} position={position} resources={resources}/>
        </MapContainer>
    </section>
  );
}
