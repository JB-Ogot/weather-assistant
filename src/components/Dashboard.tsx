import { isEmpty } from "lodash";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchWeatherData } from "../utils";
import { WiDaySunny } from "react-icons/wi";
import { FormatTemp, FormatText } from "./FormatText";
import { useDispatch } from "react-redux";
import { toggleLoader } from "../redux/reducers";

const DefaultMessage = () => {
  return (
    <div>
      <FormatText
        label="Select a country and city to get your weather forecast"
        className="p-8 jwa-bold-text"
      />
    </div>
  );
};

const WeatherStatsCard: FC<{
  country: string;
  city: string;
  description: string;
  humidity: string;
  loading: boolean;
  temperature: string;
}> = ({ country, city, description, humidity, loading, temperature }) => {
  return (
    <div className="flex-1 flex flex-col ml-6 border rounded-lg shadow-lg p-4">
      <FormatText loading={loading} label={country} className="jwa-bold-text" />
      <FormatText loading={loading} label={city} className="jwa-sm-text" />
      <FormatText
        loading={loading}
        label={description}
        className="jwa-md-text"
      />
      <FormatTemp loading={loading} temperature={temperature} />
      <FormatText
        loading={loading}
        label={`Humidity: ${humidity}`}
        className="jwa-sm-text"
      />
    </div>
  );
};

const IconsCard = () => {
  return (
    <div className="px-4 border shadow-lg rounded-lg">
      <WiDaySunny size="300" />
    </div>
  );
};

export const Dashboard = () => {
  const [weatherData, setWeatherData] = useState<any>({});
  const { selectedCity, selectedCountry, loader } = useSelector(
    (state: any) => state.dashboard
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCity) {
      fetchWeatherData(selectedCity.value, () => dispatch(toggleLoader())).then(
        (data) => {
          setWeatherData(data);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  if (isEmpty(selectedCity)) {
    return <DefaultMessage />;
  }

  return (
    <div>
      <div className="flex flex-row justify between p-6">
        <IconsCard />
        <WeatherStatsCard
          loading={loader}
          country={selectedCountry.label}
          city={weatherData?.name}
          description={weatherData?.weather?.[0]?.description}
          humidity={weatherData?.main?.humidity}
          temperature={weatherData?.main?.temp}
        />
      </div>
    </div>
  );
};
