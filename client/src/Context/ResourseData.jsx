import { createContext, useState } from "react";

export const resourceDataContext = createContext();

export default function ResourceDataProvider(props) {
  const [resourceData, setResourceData] = useState(null);

  const data = { resourceData, setResourceData };

  return (
    <resourceDataContext.Provider value={data}>
      {props.children}
    </resourceDataContext.Provider>
  );
}
