import {
    CssBaseline,
    Paper,
    ThemeProvider,
    createTheme,
} from '@material-ui/core';
import PanelProvider from './Context/PanelList';
import ResourceProvider from './Context/Resource';
import ResourceDataProvider from './Context/ResourceData';
import Main from './Components/Main';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3f8db5',
        },
        secondary: {
            main: '#e5273b',
        },
        error: {
            main: '#e5273b',
        },
    },
});
function App() {
    return (
        <Paper>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <PanelProvider>
                    <ResourceDataProvider>
                        <ResourceProvider>
                            <Main />
                        </ResourceProvider>
                    </ResourceDataProvider>
                </PanelProvider>
            </ThemeProvider>
        </Paper>
    );
}

export default App;
