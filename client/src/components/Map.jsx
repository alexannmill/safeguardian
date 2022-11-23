// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import axios from "axios"
import { useState } from "react";
import Markers from "./Markers";

export function Map() {
  const [shelters, setShelters] = useState(null)
  const position = [49.2827, -123.1207];

  //  axios.get(`https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations&q=&lang=en&rows=80&facet=facility&facet=category&facet=meals&facet=pets&facet=carts&facet=geo_local_area`)
  //  .then((res => {
  //   const shelters = res.data.records;
  //   console.log('shelters:', shelters);
  //   setShelters(shelters);
  //  }))




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
          <Markers key={position} shelters={shelters} position={position}/>
        </MapContainer>
    </section>
  );
}
