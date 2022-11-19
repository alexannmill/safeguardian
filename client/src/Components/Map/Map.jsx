import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"


function Map() {
  return (
    <div className="Map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            TESTING
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
