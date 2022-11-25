import { Icon, } from "leaflet";
import "leaflet/dist/leaflet.css";
import Here from "../../assets/you-are-here-icon.svg"

export const HereIcon = new Icon({
  iconUrl: Here,
  iconSize: [50, 50],
  // iconAnchor: [1, 1],
  // popupAnchor: [-0, -76]
});
