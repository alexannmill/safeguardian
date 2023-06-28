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

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Poppins', sans-serif",
    },
    panelMap: {
        display: 'flex',
    },
});

function Main() {
    const classes = useStyles();
    return (
        <Grid container className={classes.panelMap}>
            <Grid item xs={12}>
                <EmergencyBanner />
            </Grid>
            <Grid item xs={4}>
                <Panels />
            </Grid>
            <Grid item xs={8}>
                <Map />
            </Grid>
        </Grid>
    );
}

export default Main;
