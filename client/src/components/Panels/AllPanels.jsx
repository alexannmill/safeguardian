import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { resourceDataContext } from "../../Context/ResourseData";
import env from "react-dotenv";

export default function AllPanels() {
  const { setResourceData } = useContext(resourceDataContext);

  const [click, setClick] = useState(null);

  const panelResources = ["Shelters", "Safe Injection Sites", "Food Banks"];

  const handleClick = (panel) => {
    setClick(panel);
  };

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
