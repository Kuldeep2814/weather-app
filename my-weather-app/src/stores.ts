// stores.ts
import { writable } from "svelte/store";
import type { WeatherData, ForecastData } from "./types";

export const currentWeatherStore = writable<WeatherData | null>(null);
export const forecastStore = writable<ForecastData | null>(null);
