import Foodbanks from "./Panels/Foodbanks";
import SafeInjections from "./Panels/SafeInjections";
import Shelters from "./Panels/Shelters";
import AllPanels from "./Panels/AllPanels";

function Panels() {
  return (
    <div className="panel-list">
      {/* <Shelters />
      <Foodbanks />
      <SafeInjections /> */}
      <AllPanels />
    </div>
  );
}

export default Panels;
