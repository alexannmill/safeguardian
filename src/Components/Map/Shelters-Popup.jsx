import { Popup } from "react-leaflet";
import { useContext } from "react";
import { resourceContext } from "../../Context/Resource";

export default function SheltersPopUp() {
  const { resource } = useContext(resourceContext);

  return (
    <Popup
      key={resource.facility}
      position={[Number(resource.lat), Number(resource.long)]}
    >
      <h6>Facility: {resource.facility}</h6>
      <h6>Category: {resource.category}</h6>
      <h6>Address: {resource.address}</h6>
      <h6>Carts Allowed: {resource.carts ? "Yes" : "No"}</h6>
      <h6>Pets Allowed: {resource.pets ? "Yes" : "No"}</h6>
      <h6>Meals Allowed: {resource.meals ? "Yes" : "No"}</h6>
      <h6>Phone: {resource.phone}</h6>
    </Popup>
  );
}
