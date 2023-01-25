import Map from "./Components/Map/Map";
import Panels from "./Components/Panels";
import PanelProvider from "./Context/PanelList";
import ResourceProvider from "./Context/Resource";
import ResourceDataProvider from "./Context/ResourseData";

function App() {
  return (
    <div className="App">
      <PanelProvider>
        <ResourceProvider>
          <ResourceDataProvider>
            <Panels />
            <Map />
          </ResourceDataProvider>
        </ResourceProvider>
      </PanelProvider>
    </div>
  );
}

export default App;
