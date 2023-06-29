import { Popup } from "react-leaflet";
import { useContext } from "react";
import { resourceContext } from "../../Context/Resource";
import { Typography } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';

export default function NoHoursPopUp() {
  const { resource } = useContext(resourceContext);

  return (
      <Popup
          key={resource.facility}
          position={[Number(resource.lat), Number(resource.long)]}
      >
          <Typography>{resource.facility}</Typography>
          <Typography variant='h6'>
              <LocationOn fontSize='small' /> {resource.address}
          </Typography>
      </Popup>
  );
}
