import Map from "./Components/Map/Map";
import Panels from "./Components/Panels";
import ResourceProvider from "./Context/Resource";
import ResourceDataProvider from "./Context/ResourseData";
import SingleResourceProvider from "./Context/SingleResource";

function App() {
  return (
    <div className="App">
      <ResourceProvider>
        <ResourceDataProvider>
          <SingleResourceProvider>
            <Panels />
            <Map />
          </SingleResourceProvider>
        </ResourceDataProvider>
      </ResourceProvider>
    </div>
  );
}

export default App;
