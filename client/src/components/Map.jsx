import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { useDispatchMap } from "./hooks/MapProvider";
import { Markers } from "./Markers";

export const Map = () => {
  const mapDispatch = useDispatchMap();

  const [mapViewport, setMapViewport] = useState({
    height: "100vh",
    width: "100wh",
    longitude: -79.411079,
    latitude: 43.761539,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...mapViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/ernebuta/ck6l5q6me1dmn1ip74713pndm"
      onViewportChange={setMapViewport}
      
    >
      <Markers />
    </ReactMapGL>
  );
};
