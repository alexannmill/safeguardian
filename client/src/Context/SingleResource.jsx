import { createContext, useState } from "react";

export const singleResourceContext = createContext();

export default function SingleResourceProvider(props) {
  const [singleResource, setSingleResource] = useState(null);
  const singleResourceData = { singleResource, setSingleResource };

  return (
    <singleResourceContext.Provider value={singleResourceData}>
      {props.children}
    </singleResourceContext.Provider>
  );
}
