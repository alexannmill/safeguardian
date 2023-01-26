import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { resourceDataContext } from "../../Context/ResourseData";
import { PanelContext } from "../../Context/PanelList";
import env from "react-dotenv";
import "../Styles/Panels.css";

export default function AllPanels() {
  const { setResourceData } = useContext(resourceDataContext);
  const { setPanel, panelResources } = useContext(PanelContext);

  const [click, setClick] = useState(null);

  // ---- Set local and global state for selected resources
  // ---- Used panel state used for pop up config based on data
  const handleClick = (panel) => {
    setClick(panel);
    setPanel(panel);
  };

  // ---- Render each panel button
  const renderPanels = panelResources.map((panel) => {
    console.log("panel:", panel);

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

  // ---- Once panel is clicked axios call to API for map marker data
  useEffect(() => {
    if (!click) return;
    console.log("click:", click);
    const noSpace = click.split(" ").join("").toLowerCase();
    console.log("noSpace:", noSpace);
    console.log("hitALL");
    axios
      .get(`https://my.api.mockaroo.com/${noSpace}.json?key=${env.API_KEY}`)
      .then((res) => {
        const incomingData = res.data;
        console.log("incomingDataFB:", incomingData);
        setResourceData(incomingData);
      })
      .catch((err) => console.log(err));
  }, [click]);

  return <div className="all-panels">{renderPanels}</div>;
}
