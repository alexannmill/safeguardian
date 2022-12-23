import Map from "./Components/Map/Map";
import Panels from "./Components/Panels";
import ResourceProvider from "./Context/Resource";
import ResourceDataProvider from "./Context/ResourseData";

function App() {
  return (
    <div className="App">
      <ResourceProvider>
        <ResourceDataProvider>
          <Panels />
          <Map />
        </ResourceDataProvider>
      </ResourceProvider>
    </div>
  );
}

export default App;
