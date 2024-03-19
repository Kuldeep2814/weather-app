// src/services/weatherService.ts
import axios from "axios";
import { WeatherData, ForecastData } from "../types";

const API_KEY = "your_api_key_here"; // Replace "your_api_key_here" with your actual API key
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchCurrentWeather(city: string): Promise<WeatherData> {
  const response = await axios.get(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return {
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    windSpeed: response.data.wind.speed,
    humidity: response.data.main.humidity,
    uvIndex: 5, // Placeholder value, UV index might not be available in the current weather API response
  };
}

export async function fetchForecast(city: string): Promise<ForecastData[]> {
  const response = await axios.get(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  const forecastData: ForecastData[] = response.data.list.map((item: any) => ({
    date: item.dt_txt,
    temperature: item.main.temp,
    description: item.weather[0].description,
  }));
  return forecastData;
}
