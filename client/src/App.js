import Map from "./Components/Map/Map";
import ResourceProvider from "./Context/Resources";
import SingleResourceProvider from "./Context/SingleResource";

function App() {
  return (
    <div className="App">
      <ResourceProvider>
        <SingleResourceProvider>
          <Map />
        </SingleResourceProvider>
      </ResourceProvider>
    </div>
  );
}

export default App;
