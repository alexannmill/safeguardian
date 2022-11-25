import { Marker, Popup} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import { useEffect, useState } from "react"
import axios from "axios"
import records from "../assets/tempData.json"


export default function Markers(props) {

  // const [resources, setResources] = useState(null)
  const [clickedResource, setClickedResource] = useState(null)
  // //props location
  // //set location

  // useEffect(() => {
  //   axios
  //   .get(`https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations&q=&lang=en&rows=80&facet=facility&facet=category&facet=meals&facet=pets&facet=carts&facet=geo_local_area`)
  //     .then((res => {
  //       const incomingData = res.data.records;
  //       console.log('incomingData:', incomingData);
  //       setResources(incomingData);
  //     }))
  // },[])

const customIcon = new Icon({
  iconUrl: icon,
  iconSize: [20, 30],
  // iconAnchor: [1, 1],
  // popupAnchor: [-0, -76]
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
    onClick ={(() => {
      setClickedResource(resource)
    })}
    />
    )
  })


  return(
    <div>
      {renderMarkers}
     {clickedResource &&
        <Popup
        position={[
          clickedResource.fields.geom.coordinates[1],
          clickedResource.fields.geom.coordinates[0]
        ]}
        onClose={setClickedResource(null)}
        >
          <h2>{clickedResource.fields.faciliy}</h2>

        </Popup>
      }
    </div>
  )
}

