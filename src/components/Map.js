import React from "react";
import { useMemo } from "react";
import "../styles/home.css";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });
  const center = useMemo(
    () => ({ lat: -41.346471245591445, lng: 173.1451208066158 }),
    []
  );

  return (
    <div className="map-div">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={16}
        >
          <Marker
            position={{ lat: -41.346471245591445, lng: 173.1451208066158 }}
          />
        </GoogleMap>
      )}
    </div>
  );
};
