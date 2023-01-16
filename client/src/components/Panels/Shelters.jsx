import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { resourceDataContext } from "../../Context/ResourseData";
// import { PanelContext } from "../../Context/PanelList";

export default function Shelters() {
  const { setResourceData } = useContext(resourceDataContext);

  // const { handleClick, click } = useContext(PanelContext);

  const [click, setClick] = useState(null);

  const handleClick = () => {
    setClick(true);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5001/shelters/all`)
      .then((res) => {
        const incomingData = res.data;
        console.log("incomingDataSH:", incomingData);
        setResourceData(incomingData);
      })
      .catch((err) => console.log(err));
  }, [click]);

  return (
    <div className="shelters-panel">
      <button onClick={handleClick}>
        <h3>Shelters</h3>
      </button>
    </div>
  );
}
