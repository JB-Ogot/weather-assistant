import { FC, ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCity, setSelectedCountry } from "../../redux/reducers";
import { fetchCountries } from "../../utils";
import { Select } from "../formComponents/Select";
import { isEmpty } from "lodash";
import { citiesList } from "../../utils";
import { useSelector } from "react-redux";

const GEO_NAMES_USER = "h3mitt";

interface Props {
  children?: ReactNode;
}

export const Sidebar: FC<Props> = ({ children }) => {
  const [countries, setCountries] = useState<any[]>([]);
  const { selectedCountry } = useSelector((state: any) => state.dashboard);
  const dispatch = useDispatch();

  const handleCountrySelect = (option: any) => {
    dispatch(setSelectedCountry(option));
  };

  const handleCitySelect = (option: any) => {
    dispatch(setSelectedCity(option));
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
    <div className="pr-4">
      <Select
        handleChange={handleCountrySelect}
        options={countries}
        label="Select Countries"
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
  );
};
