import { fetchWeatherData } from "./api";

const API_KEY = "";

describe("fetchWeatherData", () => {
  it("should fetch city coordinates", async () => {
    const cityId = "CITY_ID";
    const token = "YOUR_TOKEN";

    const responseMock = {
      json: jest.fn().mockResolvedValue({
        /* mock response data */
      }),
    };
    const fetchMock = jest.fn().mockResolvedValue(responseMock);

    global.fetch = fetchMock;

    const result = await fetchWeatherData(cityId, token);

    expect(fetchMock).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`
    );

    expect(responseMock.json).toHaveBeenCalled();

    // Assert the expected result based on the mock response data
    // You can customize this assertion based on your specific data structure
    expect(result).toEqual({
      /* expected result based on the mock response data */
    });
  });

  it("should handle errors", async () => {
    const cityId = "CITY_ID";
    const token = "YOUR_TOKEN";

    const fetchMock = jest.fn().mockRejectedValue(new Error("Network error"));

    global.fetch = fetchMock;

    const consoleSpy = jest.spyOn(console, "log");

    await fetchWeatherData(cityId, token);

    expect(fetchMock).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      "Error: ",
      new Error("Network error")
    );
  });
});
