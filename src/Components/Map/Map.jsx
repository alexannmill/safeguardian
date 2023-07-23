import {
    MapContainer,
    TileLayer,
    Marker,
    ZoomControl,
    useMap,
    Rectangle,
    useMapEvent,
} from 'react-leaflet';
import { useEventHandlers } from '@react-leaflet/core';
import 'leaflet/dist/leaflet.css';
import './Map.css'; // CSS file still needed for leaflet config (under the hood)
import { HereIcon } from './HerePin';
import Markers from './Markers';
import { useContext } from 'react';
import { resourceContext } from '../../Context/Resource';
import { Container, makeStyles } from '@material-ui/core';
import Filter from './Filter';

const useStyles = makeStyles({
	mapComponent: {
		padding: '0px',
		margin: '0px',
	},
});

export default function Map() {
	const classes = useStyles();
	// --- set to dt Victoria
	const herePin = [48.4284, -123.3657];
	const centerMap = [48.4284, -123.3557];

	const { resourceData } = useContext(resourceContext);

	return (
		<Container className={classes.mapComponent}>
			<MapContainer center={centerMap} zoom={15} scrollWheelZoom={false}>
				<TileLayer
					attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					subdomains='abcd'
					minZoom={0}
					maxZoom={20}
					url='https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'
				/>
				<ZoomControl className='zoom-bar' position='bottomright' />
				<Marker key={'youAreHere'} position={herePin} icon={HereIcon} />
				{resourceData && <Markers key={centerMap} position={centerMap} />}
				<Filter />
			</MapContainer>
		</Container>
	);
}
