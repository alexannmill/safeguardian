import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import { useContext } from "react";
import { resourceDataContext } from "../../Context/ResourseData";
import { resourceContext } from "../../Context/Resource";

// ---- props: position
export default function Markers(props) {
  const { Resource, setResource } = useContext(resourceContext);
  const { resourceData } = useContext(resourceDataContext);

  console.log("props:", props);
  console.log("resourcesMARKERS:", resourceData);
  // const popup = useRef(null) -------for bug

  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [20, 30],
    iconAnchor: [1, 1],
    popupAnchor: [-0, -76],
  });

  // ---- Map each with resource data (pun intended)
  const renderMarkers = resourceData.map((resource) => {
    console.log("resourceredner:", resource);
    console.log("resourceData.lat:", resource.lat);

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
      {Resource && (
        <Popup
          position={[
            Resource.fields.geom.coordinates[1],
            Resource.fields.geom.coordinates[0],
          ]}
          // ref={popup} ---- for bug
        >
          <h6>Facility: {Resource.fields.facility}</h6>
          <h6>Category: {Resource.fields.category}</h6>
          <h6>Carts Allowed: {Resource.fields.carts}</h6>
          <h6>Pets Allowed: {Resource.fields.pets}</h6>
          <h6>Meals Allowed: {Resource.fields.meals}</h6>
          <h6>Phone: {Resource.fields.phone}</h6>
        </Popup>
      )}
    </div>
  );
}
