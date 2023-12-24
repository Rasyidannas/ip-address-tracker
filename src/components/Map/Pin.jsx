import { useEffect } from "react";
import { Marker, Popup, useMap, SVGOverlay } from "react-leaflet";
import IconPin from "../Icons/IconPin";

const Pin = function ({ onLat, onLng, onLocation }) {
  const map = useMap();
  useEffect(() => {
    map.setView([onLat, onLng], map.getZoom());
  }, [onLat, onLng]);

  return (
    // <IconPin className="relative top-1/2 left-1/2 z-[1000] -translate-y-1/2 -translate-x-1/2 w-12" />

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
