import Foodbanks from "./Panels/Foodbanks";
import Shelters from "./Panels/Shelters";

function Panels() {
  return (
    <div className="panel-list">
      <Shelters />
      <Foodbanks />
    </div>
  );
}

export default Panels;
