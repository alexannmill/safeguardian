import { useContext } from "react";
import { resourcesContext } from "../../Context/Resources";

function Resource() {
  const { setResources } = useContext(resourcesContext);

  const panels = ["Shelters", "Foodbank"];

  return (
    <div
      className="Resource"
      onClick={(e) => {
        setResources(e);
      }}
    ></div>
  );
}

export default Resource;
