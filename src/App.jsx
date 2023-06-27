import { Container, makeStyles } from '@material-ui/core';
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
                        <Container className={classes.panelMap}>
                            <Panels />
                            <Map />
                        </Container>
                    </ResourceProvider>
                </ResourceDataProvider>
            </PanelProvider>
        </div>
    );
}

export default App;
