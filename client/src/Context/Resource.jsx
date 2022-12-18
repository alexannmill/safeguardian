import { createContext, useState } from "react";

export const resourceContext = createContext();

export default function ResourceProvider(props) {
  const [resource, setResource] = useState(null);

  const resourcesData = { resource, setResource };

  return (
    <resourceContext.Provider value={resourcesData}>
      {props.children}
    </resourceContext.Provider>
  );
}
