import { Popup } from "react-leaflet";
import { useContext } from "react";
import { resourceContext } from '../../Context/Resource';
import { Grid, Typography } from '@material-ui/core';
import {
    AccessTime,
    Home,
    LocationOn,
    Pets,
    Phone,
    Restaurant,
    ShoppingCart,
} from '@material-ui/icons';

export default function SheltersPopUp() {
    const { resource } = useContext(resourceContext);
    // const popupOffset = [0, 50];
    return (
        <Popup
            // offset={popupOffset}
            key={resource.facility}
            position={[Number(resource.lat), Number(resource.long)]}
        >
            <>
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
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='h6'>
                            <Home fontSize='small' /> {resource.category}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6'>
                            <ShoppingCart fontSize='small' />{' '}
                            {resource.carts ? 'Yes' : 'No'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6'>
                            <Pets fontSize='small' />{' '}
                            {resource.pets ? 'Yes' : 'No'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h6'>
                            <Restaurant fontSize='small' />{' '}
                            {resource.meals ? 'Yes' : 'No'}
                        </Typography>
                    </Grid>
                </Grid>
            </>
        </Popup>
    );
}
