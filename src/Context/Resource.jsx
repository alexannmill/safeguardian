import { createContext, useState } from "react";

export const resourceContext = createContext();

export default function ResourceProvider(props) {
  
  const [resource, setResource] = useState(null);
	const [resourceData, setResourceData] = useState(null);

	const data = { resource, setResource, resourceData, setResourceData };

  return (
    <resourceContext.Provider value={data}>
      {props.children}
    </resourceContext.Provider>
  );
}
;


