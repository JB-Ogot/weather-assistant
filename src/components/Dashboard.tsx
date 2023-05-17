import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchWeatherData } from "../utils";
import { WiDaySunny, WiCelsius } from "react-icons/wi";
import { FormatText } from "./FormatText";

const DefaultMessage = () => {
  return (
    <div className="shadow-md h-3/4">
      <FormatText
        label="Select a country and city to get your weather forecast"
        className="p-8 jwa-bold-text"
      />
    </div>
  );
};

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
    return <DefaultMessage />;
  }

  return (
    <div className="shadow-md h-3/4">
      <div className="flex flex-row justify between p-6">
        <div className="px-4">
          <WiDaySunny size="300" />
        </div>
        <div className="flex-1 flex flex-col">
          <FormatText label={selectedCountry.label} className="jwa-bold-text" />
          <FormatText label={weatherData?.name} className="jwa-sm-text" />
          <FormatText
            label={weatherData?.weather?.[0]?.description}
            className="jwa-md-text"
          />
          <div className="flex flex-row">
            <FormatText
              label={weatherData?.main?.temp}
              className="jwa-bold-text"
            />
            <WiCelsius size="30" />
          </div>
          <FormatText
            label={`Humidity: ${weatherData?.main?.humidity}`}
            className="jwa-sm-text"
          />
        </div>
      </div>
    </div>
  );
};
