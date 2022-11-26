import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const resourcesContext = createContext();

export default function ResourceProvider(props) {
  const [resources, setResources] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations&q=&lang=en&rows=80&facet=facility&facet=category&facet=meals&facet=pets&facet=carts&facet=geo_local_area`
      )
      .then((res) => {
        const incomingData = res.data.records;
        console.log("incomingData:", incomingData);
        setResources(incomingData);
      });
  }, []);

  const resourcesData = { resources, setResources };

  return (
    <resourcesContext.Provider value={resourcesData}>
      {props.children}
    </resourcesContext.Provider>
  );
}
