import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchWeatherData } from "../utils";
import { WiDaySunny, WiCelsius } from "react-icons/wi";

export const Dashboard = () => {
  const [weatherData, setWeatherData] = useState<any>({});
  const { selectedCity, selectedCountry } = useSelector(
    (state: any) => state.dashboard
  );

  useEffect(() => {
    if (selectedCity) {
      fetchWeatherData(selectedCity.value).then((data) => {
        setWeatherData(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  if (isEmpty(selectedCity)) {
    return (
      <div className="shadow-md h-3/4">
        <span className="p-4 pt-4 text-md font-medium text-gray-800">
          Select a country and city to get your weather forecast
        </span>
      </div>
    );
  }

  return (
    <div className="shadow-md h-3/4">
      <div className="flex flex-row justify between p-6">
        <div className="px-4">
          <WiDaySunny size="300" />
        </div>
        <div className="flex-1 flex flex-col">
          <span className="text-xl font-semibold text-gray-900">
            {selectedCountry.label}
          </span>
          <span className="text-md font-medium text-gray-700">
            {weatherData?.name}
          </span>
          <span className="text-sm font-medium text-gray-900">
            {weatherData?.weather?.[0]?.description}
          </span>
          <div className="flex flex-row">
            <span className="text-xl font-semibold text-gray-900">
              {weatherData?.main?.temp}
            </span>
            <WiCelsius size="30" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            Humidity: {weatherData?.main?.humidity}
          </span>
        </div>
      </div>
    </div>
  );
};
