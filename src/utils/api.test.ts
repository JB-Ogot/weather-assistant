import { fetchWeatherData } from "./api";

const API_KEY = "";

describe("fetchWeatherData", () => {
  it("should handle errors", async () => {
    const cityId = "CITY_ID";

    const fetchMock = jest.fn().mockRejectedValue(new Error("Network error"));

    global.fetch = fetchMock;

    const consoleSpy = jest.spyOn(console, "log");

    await fetchWeatherData(cityId);

    expect(fetchMock).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      "Error: ",
      new Error("Network error")
    );
  });
});
