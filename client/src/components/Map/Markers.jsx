import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import { useContext } from "react";
import { resourceDataContext } from "../../Context/ResourseData";
import { resourceContext } from "../../Context/Resource";

// ---- props: position
export default function Markers(props) {
  const { resource, setResource } = useContext(resourceContext);
  const { resourceData } = useContext(resourceDataContext);

  console.log("props:", props);
  console.log("resourcesMARKERS:", resourceData);
  console.log("resource:", resource);

  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [40, 50],
    iconAnchor: [1, 1],
    popupAnchor: [-0, -76],
  });

  // ---- Map each with resource data (pun intended)
  const renderMarkers = resourceData.map((resource) => {
    console.log("resourceredner:", resource);

    return (
      <Marker
        key={resourceData.id}
        position={[Number(resource.lat), Number(resource.long)]}
        icon={customIcon}
        eventHandlers={{
          click: () => {
            setResource(resource);
          },
        }}
      />
    );
  });

  return (
    <div>
      {renderMarkers}
      {resource && (
        <Popup position={[Number(resource.lat), Number(resource.long)]}>
          <h6>Facility: {resource.facility}</h6>
          <h6>Category: {resource.category}</h6>
          <h6>Carts Allowed: {resource.carts ? "Yes" : "No"}</h6>
          <h6>Pets Allowed: {resource.pets ? "Yes" : "No"}</h6>
          <h6>Meals Allowed: {resource.meals ? "Yes" : "No"}</h6>
          <h6>Phone: {resource.phone}</h6>
        </Popup>
      )}
    </div>
  );
}
