// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import { useContext } from "react";
import { resourcesContext } from "../../Context/Resources";

export default function Map() {
  const position = [49.2827, -123.1207];

  const { resources, setResources } = useContext(resourcesContext);

  return (
    <section className="map-component">
      <MapContainer center={position} zoom={14.5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a 
            href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {resources && (
          <Markers key={position} position={position} resources={resources} />
        )}
      </MapContainer>
    </section>
  );
}
