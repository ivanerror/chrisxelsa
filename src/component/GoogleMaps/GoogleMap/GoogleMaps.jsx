import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
  border: "1px solid #208DD4",
  borderRadius: "15px",
};

function GoogleMaps(props) {
  const { center } = props;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  // console.log(map)

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={center} title="Crown Victoria Hotel" />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default GoogleMaps;
