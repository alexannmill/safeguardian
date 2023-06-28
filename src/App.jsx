import {
    Container,
    CssBaseline,
    Grid,
    Paper,
    makeStyles,
} from '@material-ui/core';
import PanelProvider from './Context/PanelList';
import ResourceProvider from './Context/Resource';
import ResourceDataProvider from './Context/ResourceData';
import Main from './Components/Main';

function App() {
    return (
        <Paper>
            <CssBaseline />
            <PanelProvider>
                <ResourceDataProvider>
                    <ResourceProvider>
                        <Main />
                    </ResourceProvider>
                </ResourceDataProvider>
            </PanelProvider>
        </Paper>
    );
}

export default App;
