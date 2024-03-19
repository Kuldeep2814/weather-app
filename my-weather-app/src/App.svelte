<!-- App.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { currentWeatherStore, forecastStore } from './stores';
  import { fetchCurrentWeather, fetchForecast } from './services/weatherService';
  import CurrentWeather from './components/CurrentWeather.svelte';
  import Forecast from './components/Forecast.svelte';

  // Fetch current weather data on component mount
  onMount(async () => {
    const city = "New York"; // Replace "New York" with your desired city
    const currentWeather = await fetchCurrentWeather(city);
    const forecast = await fetchForecast(city);
    currentWeatherStore.set(currentWeather);
    forecastStore.set(forecast);
  });
</script>

<main class="container mx-auto p-4">
	<h1 class="text-3xl font-bold mb-4">Weather App</h1>
  <CurrentWeather />
  <Forecast />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
