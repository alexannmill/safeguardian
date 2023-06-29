import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import { useContext, useState } from "react";
import { resourceDataContext } from "../../Context/ResourceData";
import { resourceContext } from "../../Context/Resource";
import { PanelContext } from "../../Context/PanelList";
import SheltersPopUp from "./Shelters-Popup";
import HoursPopUp from "./Hours-Popup";
import NoHoursPopUp from "./NoHours-Popup";
import { useEffect } from "react";

// ---- props: position
export default function Markers(props) {
    const { resource, setResource } = useContext(resourceContext);
    const { resourceData } = useContext(resourceDataContext);
    const { panel } = useContext(PanelContext);

    const [popUpType, setPopUpType] = useState(null);

    // ---- Config Pop-up to match data sets
    useEffect(() => {
        // ---- Setting Popup with shelter format
        if (panel === 'Shelters') setPopUpType(1);

        // ---- Setting Popup with hours format
        if (
            panel === 'Food Banks' ||
            panel === 'Safe Injection Sites' ||
            panel === 'Detox Centres'
        ) {
            setPopUpType(2);
        }
        // ---- Setting Popup with no hours format
        if (panel === 'Allowed Camping Areas' || panel === 'Hospitals') {
            setPopUpType(3);
        }
    }, [panel]);

    // ---- Marker icons for each facility
    const customIcon = new Icon({
        iconUrl: icon,
        iconSize: [30, 40],
        iconAnchor: [15, 0],
        popupAnchor: [0, 0],
        className: 'icons',
    });

    // ---- Maps each marker for resource
    const renderMarkers = resourceData.map((resource) => {
        return (
            <Marker
                key={`${resource.lat}${resource.facility}`}
                position={[Number(resource.lat), Number(resource.long)]}
                icon={customIcon}
                eventHandlers={{
                    click: (e) => {
                        setResource(resource);
                    },
                }}
            />
        );
    });

    return (
        <div>
            {renderMarkers}
            {resource && popUpType === 1 && (
                <SheltersPopUp resource={resource} />
            )}
            {resource && popUpType === 2 && <HoursPopUp resource={resource} />}
            {resource && popUpType === 3 && (
                <NoHoursPopUp resource={resource} />
            )}
        </div>
    );
}
