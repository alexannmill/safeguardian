import { createContext, useState } from "react";

export const PanelContext = createContext();

export default function PanelProvider(props) {
  const [click, setClick] = useState(null);

  const PanelResources = ["Shelters", "Safe Injection Sites", "Food Banks"];

  const handleClick = () => {
    setClick(true);
  };

  const data = { handleClick, setClick, click, PanelResources };

  return (
    <PanelContext.Provider value={data}>{props.children}</PanelContext.Provider>
  );
}
