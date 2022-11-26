import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import { useContext, useEffect, useRef, useState } from "react";
import records from "../../assets/tempData.json";
import { HereIcon } from "./HerePin";
import { singleResourceContext } from "../../Context/SingleResource";
import axios from "axios";

// ---- props: position, resources
export default function Markers(props) {
  const { singleResource, setSingleResource } = useContext(
    singleResourceContext
  );

  // const popup = useRef(null) -------for bug

  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [20, 30],
    iconAnchor: [1, 1],
    popupAnchor: [-0, -76],
  });

  // ---- Map each with resource data (pun intended)
  const renderMarkers = props.resources.map((resource) => {
    return (
      <Marker
        key={resource.recordid}
        position={[
          resource.fields.geom.coordinates[1],
          resource.fields.geom.coordinates[0],
        ]}
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
      <Marker key={"youAreHere"} position={props.position} icon={HereIcon} />
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
