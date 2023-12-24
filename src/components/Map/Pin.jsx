import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const Pin = function ({ onLat, onLng, onLocation }) {
  const map = useMap();
  useEffect(() => {
    map.setView([onLat, onLng], map.getZoom());
  }, [onLat, onLng]);

  return (
    <Marker position={[onLat, onLng]}>
      <Popup>
        <p className="text-center">
          {onLocation ||
            "Location not found. Please tyr input correct domain or ip address!"}
        </p>
      </Popup>
    </Marker>
  );
};

export default Pin;
