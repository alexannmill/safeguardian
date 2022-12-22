import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import { useContext } from "react";
import { singleResourceContext } from "../../Context/SingleResource";
import { resourceDataContext } from "../../Context/ResourseData";

// ---- props: position
export default function Markers(props) {
  const { singleResource, setSingleResource } = useContext(
    singleResourceContext
  );
  const { resourceData } = useContext(resourceDataContext);

  console.log("props:", props);
  console.log("resources:", resourceData);
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
    return (
      <Marker
        key={resourceData.id}
        position={[Number(resourceData.lat), Number(resourceData.long)]}
        icon={customIcon}
        eventHandlers={{
          click: () => {
            setSingleResource(resource);
          },
        }}
      />
    );
  });

  return (
    <div>
      {renderMarkers}
      {singleResource && (
        <Popup
          position={[
            singleResource.fields.geom.coordinates[1],
            singleResource.fields.geom.coordinates[0],
          ]}
          // ref={popup} ---- for bug
        >
          <h6>Facility: {singleResource.fields.facility}</h6>
          <h6>Category: {singleResource.fields.category}</h6>
          <h6>Carts Allowed: {singleResource.fields.carts}</h6>
          <h6>Pets Allowed: {singleResource.fields.pets}</h6>
          <h6>Meals Allowed: {singleResource.fields.meals}</h6>
          <h6>Phone: {singleResource.fields.phone}</h6>
        </Popup>
      )}
    </div>
  );
}
