import React, { useState } from "react";
import share from "../assets/img/share.svg";
import notification from "../assets/img/notification.svg";

const WeatherHeader = ({ cityName, setCityName, cities }) => {
  const [showSuggestion, setShowSuggestion] = useState(true);
  const handleInput = (e) => {
    if (e.target.value !== undefined) {
      setCityName(e.target.value);
    } else {
      setCityName(e.target.textContent);
      setShowSuggestion(false);
      setTimeout(() => {
        setShowSuggestion(true);
      }, 200);
    }
  };
  return (
    <div className="location-header">
      <img src={share} alt="share" />
      <div className="tooltip">
        <div className="dropdown">
          <input
            type="text"
            value={cityName}
            id="location-name"
            onChange={handleInput}
            onKeyDown={handleInput}
          />
          {showSuggestion ? (
            <div id="weatherSuggestion" className="weather-suggestion">
              {cities &&
                cities.map((data, index) => (
                  <span
                    className="suggestion-contents"
                    key={index}
                    onClick={handleInput}
                  >
                    {data?.location?.name}
                  </span>
                ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <img src={notification} alt="notification" />
    </div>
  );
};

export default WeatherHeader;
