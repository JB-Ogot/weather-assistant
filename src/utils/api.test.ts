import { fetchWeatherData } from "./api";

const API_KEY = "";

describe("fetchWeatherData", () => {
  it("should handle errors", async () => {
    const cityId = "CITY_ID";

    const fetchMock = jest.fn().mockRejectedValue(new Error("Network error"));

    console.log("Here: ");

    global.fetch = fetchMock;

    const consoleSpy = jest.spyOn(console, "log");

    await fetchWeatherData(cityId);

    expect(fetchMock).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      "Error fetching data: ",
      new Error("Network error")
    );
  });
});
