import { Marker, Popup} from "react-leaflet";
import { Icon, } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import { useState } from "react"
import records from "../../assets/tempData.json"
import { HereIcon } from "./HerePin";

export default function Markers(props) {

  const [clickedResource, setClickedResource] = useState(null)

  const handleClick = (e, resource) => {
    e.preventDefault()
    setClickedResource(resource)
  }

const customIcon = new Icon({
  iconUrl: icon,
  iconSize: [20, 30],
  iconAnchor: [1, 1],
  popupAnchor: [-0, -76]
});

// Map each with resource data (pun intended)
  const renderMarkers = (records.records).map((resource) => {
    return (
        <Marker 
          key={resource.recordid}
          position={[
            resource.fields.geom.coordinates[1],
            resource.fields.geom.coordinates[0]
          ]} 
          icon={customIcon}
          onClick={(e) => {
            handleClick(e, resource)
          }}
        />
    )
  })

  return(
    <div>
        <Marker 
          key={"youAreHere"} 
          position={props.position}
          icon={HereIcon}
        />
      {renderMarkers}
     {clickedResource &&
        <Popup
        position={[
          clickedResource.fields.geom.coordinates[1],
          clickedResource.fields.geom.coordinates[0]
        ]}
        onClose={setClickedResource(null)}
        >
          <h2>Facility: {clickedResource.fields.facility}</h2>
          <h2>Category: {clickedResource.fields.category}</h2>
          <h2>Carts Allowed: {clickedResource.fields.carts}</h2>
          <h2>Pets Allowed: {clickedResource.fields.pets}</h2>
          <h2>Meals Allowed: {clickedResource.fields.meals}</h2>
          <h2>Phone: {clickedResource.fields.phone}</h2>
        </Popup>
      }
    </div>
  )
}

