import L from "leaflet";
import iconLocation from "/assets/images/icon-location.svg";

const iconPin = new L.Icon({
  iconUrl: iconLocation,
  iconRetinaUrl: iconLocation,
  popupAnchor: [-0, -0],
  iconSize: new L.Point(38, 48),
  className: "leaflet-div-icon",
});

export { iconPin };
