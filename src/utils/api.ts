const API_KEY = "7b588b6718094c44b13d42cdb87f71f9";

export const fetchWeatherData = async (lat: any, lon: any) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchCityCoordinates = async (cityId: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`
    );
    const data = await response.json();
    console.log("Response: ", data);
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export async function fetchCountries(apiUsername: string) {
  const baseURL = "http://api.geonames.org/countryInfoJSON";

  const url = new URL(baseURL);
  url.searchParams.append("username", apiUsername);

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
