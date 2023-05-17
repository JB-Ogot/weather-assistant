import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCityCoordinates } from "../utils";

export const Dashboard = () => {
  const [weatherData, setWeatherData] = useState<any>({});
  const { selectedCity } = useSelector((state: any) => state.dashboard);

  useEffect(() => {
    if (selectedCity) {
      fetchCityCoordinates(selectedCity.value).then((data) => {
        setWeatherData(data);
      });
    }
  }, [selectedCity]);

  if (!weatherData) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="">
      <div>City: {weatherData?.name}</div>
      <div>Temp: {weatherData?.main?.temp}</div>
      <div>Humidity: {weatherData?.main?.humidity}</div>
      <div>Weather: {weatherData?.weather?.[0]?.main}</div>
    </div>
  );
};
