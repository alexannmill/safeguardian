import { createContext, useState } from "react";

export const PanelContext = createContext();

export default function PanelProvider(props) {
  const [click, setClick] = useState(null);

  const handleClick = () => {
    setClick(true);
  };

  const data = { handleClick, setClick, click };

  return (
    <PanelContext.Provider value={data}>{props.children}</PanelContext.Provider>
  );
}
