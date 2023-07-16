import React, { useEffect, useState } from "react";
import WeatherHeader from "../components/WeatherHeader";
import LocationInfo from "../components/LocationInfo";
import { getAllCities, getCityInfo } from "../helperFunctions/fetchApi";

const HomePage = () => {
  const [cityName, setCityName] = useState("Bhubaneswar");
  const [cityInfo, setCityInfo] = useState("");
  const [cities, setAllCities] = useState("");
  useEffect(() => {
    getCityInfo(cityName).then((response) => {
      if (response?.success) {
        setCityInfo(response.data);
      }
    });
  }, [cityName, setCityName]);

  useEffect(() => {
    getAllCities().then((response) => {
      if (response?.success) {
        setAllCities(response.data);
      }
    });
  },[]);

  return (
    <div className="weather">
      <WeatherHeader cityName={cityName} setCityName={setCityName} cities={cities} />
      <LocationInfo cityInfo={cityInfo} />
      <p className="additional-info">
        Make the most of this nice weather that I generated for you. Or else.
      </p>
    </div>
  );
};

export default HomePage;
