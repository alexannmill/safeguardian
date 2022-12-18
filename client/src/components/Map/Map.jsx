// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import { useContext } from "react";
import { resourceContext } from "../../Context/Resource";
import { resourceDataContext } from "../../Context/ResourseData";

export default function Map() {
  // --- set to dt Victora
  const position = [48.4284, -123.3657];

  const { resource } = useContext(resourceContext);
  const { resourceData } = useContext(resourceDataContext);

  console.log("resource:", resource);
  return (
    <section className="map-component">
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a 
            href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {resource && (
          <Markers
            key={position}
            position={position}
            resources={resourceData}
          />
        )}
      </MapContainer>
    </section>
  );
}
