import {
	CssBaseline,
	Paper,
	ThemeProvider,
	createTheme,
} from '@material-ui/core';
import PanelProvider from './Context/PanelList';
import ResourceProvider from './Context/Resource';
import Main from './Components/Main';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#2528AF',
		},
		secondary: {
			main: '#e5273b',
		},
		error: {
			main: '#e5273b',
		},
	},
	typography: {
		h6: {
			fontSize: '.7rem',
		},
	},
});
function App() {
	return (
		<Paper>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<PanelProvider>
					<ResourceProvider>
						<Main />
					</ResourceProvider>
				</PanelProvider>
			</ThemeProvider>
		</Paper>
	);
}

export default App;
