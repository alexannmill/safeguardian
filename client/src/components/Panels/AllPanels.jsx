import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { resourceDataContext } from "../../Context/ResourseData";
// import { PanelContext } from "../../Context/PanelList";

export default function AllPanels() {
  const { setResourceData } = useContext(resourceDataContext);
  // const { panelResources } = useContext(PanelContext);

  const [click, setClick] = useState(null);

  const panelResources = ["Shelters", "Safe Injection", "Food Banks"];

  const handleClick = (panel) => {
    // e.preventDefault();
    setClick(panel);
  };

  const renderPanels = panelResources.map((panel) => {
    console.log("panel:", panel);
    if (panel === "Safe Injection") {
      panel = `${panel} Sites`;
    }
    return (
      <button
        key={panel}
        className={panel}
        onClick={(e) => {
          handleClick(panel);
        }}
      >
        <h3>{panel}</h3>
      </button>
    );
  });

  useEffect(() => {
    if (!click) return;
    console.log("click:", click);
    const noSpace = click.split(" ").join("");
    console.log("hitALL");
    axios
      .get(`http://localhost:5001/${noSpace}/all`)
      .then((res) => {
        const incomingData = res.data;
        console.log("incomingDataFB:", incomingData);
        setResourceData(incomingData);
      })
      .catch((err) => console.log(err));
  }, [click]);

  return <div className="all-panels">{renderPanels}</div>;
}
