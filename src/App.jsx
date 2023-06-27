import { Container, Grid, makeStyles } from '@material-ui/core';
import EmergencyBanner from './Components/EmergencyBanner';
import Map from './Components/Map/Map';
import Panels from './Components/Panels/Panels';
import PanelProvider from './Context/PanelList';
import ResourceProvider from './Context/Resource';
import ResourceDataProvider from './Context/ResourceData';

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // flexDirection: 'column',
        // fontFamily: "'Poppins', sans-serif",
    },
    panelMap: {
        display: 'flex',
    },
});

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <PanelProvider>
                <ResourceDataProvider>
                    <ResourceProvider>
                        <EmergencyBanner />
                        <Grid container className={classes.panelMap}>
                            <Grid item xs={4}>
                                <Panels />
                            </Grid>
                            <Grid item xs={8}>
                                <Map />
                            </Grid>
                        </Grid>
                    </ResourceProvider>
                </ResourceDataProvider>
            </PanelProvider>
        </div>
    );
}

export default App;
