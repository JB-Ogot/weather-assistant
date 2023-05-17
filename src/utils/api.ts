export const fetchWeatherData = async (cityId: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
};

export async function fetchCountries() {
  const baseURL = "https://secure.geonames.org/countryInfoJSON";

  const url = new URL(baseURL);
  url.searchParams.append(
    "username",
    process.env.REACT_APP_GEONAMES_USER as string
  );

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.geonames && data.geonames.length > 0) {
      const countries = data.geonames.map(
        (country: { countryName: string; countryCode: string }) => ({
          name: country.countryName,
          code: country.countryCode,
        })
      );

      return countries;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}
