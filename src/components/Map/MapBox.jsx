import { useContext } from "react";
import Map from "./Map";
import DataContext from "../../store/data-context";

function MapBox() {
  const dataCtx = useContext(DataContext);

  let lat = dataCtx.lat;
  let lng = dataCtx.lng;

  return (
    <div className="leaflet-container">
      <Map />
    </div>
  );
}

export default MapBox;
