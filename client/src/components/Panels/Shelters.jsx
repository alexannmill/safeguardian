import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { resourceDataContext } from "../../Context/ResourseData";

export default function Shelters(props) {
  const { setResourceData } = useContext(resourceDataContext);
  const [click, setClick] = useState(null);

  const handleClick = () => {
    setClick(true);
  };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5001/shelters/all`)
  //     .then((res) => {
  //       const incomingData = res.data;
  //       console.log("incomingData:", incomingData);
  //       setResourceData(incomingData);
  //     })
  //     .catch((err) => console.log(err));
  // }, [click]);

  return (
    <div className="shelters-panel">
      <button onClick={handleClick}>
        <h3>Shelters</h3>
      </button>
    </div>
  );
}
