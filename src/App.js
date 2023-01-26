import EmergencyBanner from "./Components/EmergencyBanner";
import Map from "./Components/Map/Map";
import Panels from "./Components/Panels";
import PanelProvider from "./Context/PanelList";
import ResourceProvider from "./Context/Resource";
import ResourceDataProvider from "./Context/ResourceData";

function App() {
  return (
    <div className="App">
      <PanelProvider>
        <ResourceDataProvider>
          <ResourceProvider>
            <EmergencyBanner />
            <div className="panel-map">
              <Panels />
              <Map />
            </div>
          </ResourceProvider>
        </ResourceDataProvider>
      </PanelProvider>
    </div>
  );
}

export default App;
