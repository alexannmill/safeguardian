import { createContext, useState } from "react";

export const PanelContext = createContext();

export default function PanelProvider(props) {
  const [panel, setPanel] = useState(null);

  // ---- Used in setting panel state allow with rendering panel buttons alsoneed to match API EPs
  const panelResources = [
    "Shelters",
    "Safe Injection Sites",
    "Food Banks",
    "Detox Centres",
    "Allowed Camping Areas",
    "Hospitals",
  ];
  const data = { setPanel, panel, panelResources };

  return (
    <PanelContext.Provider value={data}>{props.children}</PanelContext.Provider>
  );
}
