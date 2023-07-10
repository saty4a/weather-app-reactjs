import React from "react";

const LocationInfo = ({cityInfo}) => {
  return (
    <div className="location-info">
        <img src={`${cityInfo?.current?.icon}`} className="locationInfoImage" alt="weatherIcon" />
      <span className="locationInfoTemprature">
        <h2>
          <span>{cityInfo?.current?.tempC}</span>
          <sup>o</sup>
        </h2>
        <p>
          Feels <span>{cityInfo?.current?.tempF}</span>
          <sup>o</sup>
        </p>
      </span>
    </div>
  );
};

export default LocationInfo;
