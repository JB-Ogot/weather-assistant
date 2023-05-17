import { FC, ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  clearSelectedCity,
  clearSelectedCountry,
  setSelectedCity,
  setSelectedCountry,
} from "../../redux/reducers";
import { fetchCountries } from "../../utils";
import { Select } from "../formComponents/Select";
import { isEmpty } from "lodash";
import { citiesList } from "../../utils";
import { useSelector } from "react-redux";
import { Button } from "../Button";

const GEO_NAMES_USER = "h3mitt";

interface Props {
  children?: ReactNode;
}

export const Sidebar: FC<Props> = ({ children }) => {
  const [countries, setCountries] = useState<any[]>([]);
  const { selectedCountry, selectedCity } = useSelector(
    (state: any) => state.dashboard
  );
  const dispatch = useDispatch();

  const handleCountrySelect = (option: any) => {
    dispatch(setSelectedCountry(option));
  };

  const handleCitySelect = (option: any) => {
    dispatch(setSelectedCity(option));
  };

  const handleClearSearch = () => {
    dispatch(clearSelectedCity());
    dispatch(clearSelectedCountry());
  };

  useEffect(() => {
    fetchCountries(GEO_NAMES_USER)
      .then((data) => {
        const selectOptions = data.map((country: any) => ({
          value: country.code,
          label: country.name,
        }));
        setCountries(selectOptions);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="pr-10 flex flex-col justify-between shadow-xl h-1/2 rounded-md">
      <div>
        <div className="pl-2 pt-6">
          <span className="text-sm font-sans text-gray-800">
            Select Search Options
          </span>
        </div>
        <Select
          handleChange={handleCountrySelect}
          options={countries}
          label="Select Country"
        />
        {!isEmpty(selectedCountry) && (
          <Select
            handleChange={handleCitySelect}
            options={citiesList
              .filter((city) => city.country === selectedCountry.value)
              .map((city) => ({
                label: city.name,
                value: `${city.id}`,
              }))}
            label="Select a City"
          />
        )}
      </div>
      {!isEmpty(selectedCity) && (
        <div className="flex justify-center items-center pb-6">
          <Button label="Clear Search" onClick={handleClearSearch} />
        </div>
      )}
    </div>
  );
};
