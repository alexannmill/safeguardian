import { Popup } from "react-leaflet";

export default function NoHoursPopUp(props) {
  // const { resource } = useContext(resourceContext);

  return (
    <Popup
      key={props.resource.facility}
      position={[Number(props.resource.lat), Number(props.resource.long)]}
    >
      <h6>Facility: {props.resource.facility}</h6>
      <h6>Category: {props.resource.address}</h6>
      <h6>Phone: {props.resource.phone}</h6>
    </Popup>
  );
}
