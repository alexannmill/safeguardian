import {
    Container,
    CssBaseline,
    Grid,
    Paper,
    makeStyles,
} from '@material-ui/core';
import EmergencyBanner from './EmergencyBanner';
import Map from './Map/Map';
import Panels from './Panels/Panels';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Poppins', sans-serif",
    },
    panelMap: {
        display: 'flex',
        borderRadius: '0px',
    },
}));

function Main() {
    const classes = useStyles();
    return (
        <Grid container className={classes.panelMap}>
            <Grid item xs={12}>
                <EmergencyBanner />
            </Grid>
            <Grid item xs={2}>
                <Panels />
            </Grid>
            <Grid item xs={10}>
                <Map />
            </Grid>
        </Grid>
    );
}

export default Main;
