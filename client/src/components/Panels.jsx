import AllPanels from "./Panels/AllPanels";
import CallEmerg from "./Panels/CallEmerg";
import "./Styles/Panels.css";

function Panels() {
  return (
    <div className="panel-list">
      <AllPanels />
      <CallEmerg />
    </div>
  );
}

export default Panels;
