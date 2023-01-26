import { createContext, useState } from "react";

export const resourceContext = createContext();

export default function ResourceProvider(props) {
  const [resource, setResource] = useState(null);

  const data = { resource, setResource };

  return (
    <resourceContext.Provider value={data}>
      {props.children}
    </resourceContext.Provider>
  );
}
;
