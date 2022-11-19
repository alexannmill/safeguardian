// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";

export function Map() {
  // Berlin coordinates
  const position = [48.42, -123.36];

  // --- (6) Create a custom marker ---
  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [20, 30],
    // iconAnchor: [1, 1],
    // popupAnchor: [-0, -76]
  });

  return (
    <section className="map-component">
      <div className="map">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a 
            href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // --- (7) Alternative map style (attribution and url copied from the leaflet extras website) ---
            // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            // url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            // --- -------------------------------------------------------------------------------------- ---
          />
          <Marker position={position} icon={customIcon}>
            <Popup>test</Popup>
          </Marker>
        </MapContainer>
        {/* --- ---------------------------- --- */}
      </div>
    </section>
  );
}
