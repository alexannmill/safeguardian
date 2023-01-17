import Foodbanks from "./Panels/Foodbanks";
import SafeInjections from "./Panels/SafeInjections";
import Shelters from "./Panels/Shelters";

function Panels() {
  return (
    <div className="panel-list">
      <Shelters />
      <Foodbanks />
      <SafeInjections />
    </div>
  );
}

export default Panels;
