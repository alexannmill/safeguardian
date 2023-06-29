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
          <h3>{resource.facility}</h3>
          <h6>Address: {resource.address}</h6>
      </Popup>
  );
}
