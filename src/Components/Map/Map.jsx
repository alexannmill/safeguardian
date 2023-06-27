import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Map.css'; // CSS file still needed for leaflet config (under the hood)
import { HereIcon } from './HerePin';
import Markers from './Markers';
import { useContext } from 'react';
import { resourceDataContext } from '../../Context/ResourceData';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    mapComponent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0px',
    },
});
export default function Map() {
    const classes = useStyles();
    // --- set to dt Victoria
    const position = [48.4284, -123.3657];

    const { resourceData } = useContext(resourceDataContext);

    return (
        <Container className={classes.mapComponent}>
            <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    subdomains="abcd"
                    minZoom={0}
                    maxZoom={20}
                    url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
                />
                <ZoomControl className="zoom-bar" position="bottomright" />
                <Marker
                    key={"youAreHere"}
                    position={position}
                    icon={HereIcon}
                />
                {resourceData && <Markers key={position} position={position} />}
            </MapContainer>
        </Container>
    );
}
