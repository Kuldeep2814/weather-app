<!-- src/components/CurrentWeather.svelte -->
<script lang="ts">
  import { currentWeatherStore } from '../stores';
  import type { WeatherData } from '../types';

  $: weatherData = $currentWeatherStore;
</script>

<div>
  {#if weatherData}
    <h2 class="text-2xl font-bold mb-2">Current Weather</h2>
    <p>Temperature: {weatherData.temperature}°C</p>
    <p>Description: {weatherData.description}</p>
    <p>Wind Speed: {weatherData.windSpeed} m/s</p>
    <p>Humidity: {weatherData.humidity}%</p>
    <p>UV Index: {weatherData.uvIndex}</p>
  {:else}
    <p>Loading...</p>
  {/if}
</div>
