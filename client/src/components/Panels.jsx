import { useContext } from "react";
import { resourceContext } from "../Context/Resource";
import Shelters from "./Panels/Shelters";

function Panels() {
  return (
    <div className="panel-list">
      <Shelters />
    </div>
  );
}

export default Panels;
