import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { resourceDataContext } from "../../Context/ResourseData";

export default function SafeInjections() {
  const { setResourceData } = useContext(resourceDataContext);
  const [click, setClick] = useState(null);

  const handleClick = () => {
    setClick(true);
  };

  useEffect(() => {
    console.log("hit");
    axios
      .get(`http://localhost:5001/safeInjections/all`)
      .then((res) => {
        const incomingData = res.data;
        console.log("incomingDataSI:", incomingData);
        setResourceData(incomingData);
      })
      .catch((err) => console.log(err));
  }, [click]);

  return (
    <div className="safeInjections-panel">
      <button onClick={handleClick}>
        <h3>Safe Injections</h3>
      </button>
    </div>
  );
}
