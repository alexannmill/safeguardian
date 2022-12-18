import { useContext } from "react";
import { resourceContext } from "../Context/Resource";

function Panels() {
  const { setResource } = useContext(resourceContext);

  const panels = ["Shelters", "Foodbank", "Safe Injection Sites"];

  const renderPanels = panels.map((panel) => {
    return (
      <div
        key={panel}
        className="panel"
        onClick={() => {
          setResource(panel);
          console.log("panel:", panel);
        }}
      >
        <h3>{panel}</h3>
      </div>
    );
  });
  return <div className="panel-list"> {renderPanels}</div>;
}

export default Panels;
