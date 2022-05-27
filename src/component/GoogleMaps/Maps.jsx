import React from "react";
import GoogleMaps from "./GoogleMap/GoogleMaps";

export default function Maps(props) {
  const { getDirectionUrl, lat, lng } = props;

  const center = {
    lat: lat,
    lng: lng,
  };

  const handleGetDirection = () => {
    window.open(getDirectionUrl);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <GoogleMaps center={center} />
        <button
          onClick={handleGetDirection}
          className="p-4 font-bold w-52 bg-cyan-200 rounded-lg m-4"
        >
          Get Direction!
        </button>
      </div>
    </>
  );
}

Maps.defaultProps = {
  getDirectionUrl: "",
  lat: 0,
  lng: 0,
};

// export default Maps;
