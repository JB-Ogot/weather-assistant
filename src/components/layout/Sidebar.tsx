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

interface Props {
  children?: ReactNode;
}

const SidebarHeader = () => {
  return (
    <div className="pl-2 pt-6">
      <span className="text-sm font-sans text-gray-800">
        Select Search Options
      </span>
    </div>
  );
};

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
    fetchCountries()
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
        <SidebarHeader />
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
        <div className="jwa-flex-center pb-6">
          <Button label="Clear Search" onClick={handleClearSearch} />
        </div>
      )}
    </div>
  );
};
