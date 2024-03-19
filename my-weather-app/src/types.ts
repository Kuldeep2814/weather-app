// types.ts
export interface WeatherData {
  temperature: number;
  description: string;
  windSpeed: number;
  humidity: number;
  uvIndex: number;
}

export interface ForecastData {
  // Define forecast data structure here
  date: string;
  temperature: number;
  description: string;
}
