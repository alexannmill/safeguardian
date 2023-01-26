import { Popup } from "react-leaflet";
import { useContext } from "react";
import { resourceContext } from "../../Context/Resource";

export default function NoHoursPopUp() {
  const { resource } = useContext(resourceContext);

  return (
    <Popup
      key={resource.facility}
      position={[Number(resource.lat), Number(resource.long)]}
    >
      <h6>Facility: {resource.facility}</h6>
      <h6>Address: {resource.address}</h6>
      <h6>Hours: {`${resource.open} to ${resource.close}`}</h6>
      <h6>Phone: {resource.phone}</h6>
    </Popup>
  );
}