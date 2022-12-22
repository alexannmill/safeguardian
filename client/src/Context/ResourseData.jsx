import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { resourceContext } from "./Resource";

export const resourceDataContext = createContext();

export default function ResourceDataProvider(props) {
  const { resource } = useContext(resourceContext);
  const [resourceData, setResourceData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/shelters/all`)
      .then((res) => {
        const incomingData = res.data;
        console.log("incomingData:", incomingData);
        setResourceData(incomingData);
      })
      .catch((err) => console.log(err));
  }, [resource]);

  const data = { resourceData, setResourceData };

  return (
    <resourceDataContext.Provider value={data}>
      {props.children}
    </resourceDataContext.Provider>
  );
}
