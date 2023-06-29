import { Popup } from "react-leaflet";
import { useContext } from "react";
import { resourceContext } from "../../Context/Resource";
import { Phone, AccessTime, LocationOn } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
//
export default function HoursPopUp() {
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
            <Typography variant='h6'>
                <AccessTime fontSize='small' />{' '}
                {`${resource.open || ''} to ${resource.close || ''}`}
            </Typography>
            <Typography variant='h6'>
                <Phone fontSize='small' /> {resource.phone}
            </Typography>
        </Popup>
    );
}
