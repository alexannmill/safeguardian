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
            <Panels />
            <Map />
          </ResourceProvider>
        </ResourceDataProvider>
      </PanelProvider>
    </div>
  );
}

export default App;
