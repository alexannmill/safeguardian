import Map from "./Components/Map/Map";
import Panels from "./Components/Panels";
import ResourceProvider from "./Context/Resource";
import ResourceDataProvider from "./Context/ResourseData";
import AllPanels from "./Components/Panels/AllPanels";

function App() {
  return (
    <div className="App">
      <ResourceProvider>
        <ResourceDataProvider>
          <Panels />
          {/* <AllPanels /> */}
          <Map />
        </ResourceDataProvider>
      </ResourceProvider>
    </div>
  );
}

export default App;
