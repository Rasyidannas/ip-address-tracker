import { MapContainer, TileLayer, useMap } from "react-leaflet";

import { useContext } from "react";
import DataContext from "../../store/data-context";
import Pin from "./Pin";

const Map = function () {
  const dataCtx = useContext(DataContext);

  const lat = dataCtx.lat;
  const lng = dataCtx.lng;
  const location = dataCtx.datas.location;

  return (
    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Pin onLat={lat} onLng={lng} onLocation={location} />
    </MapContainer>
  );
};

export default Map;
