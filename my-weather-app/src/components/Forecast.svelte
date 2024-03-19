<!-- src/components/Forecast.svelte -->
<script lang="ts">
  import { forecastStore } from '../stores';
  import type { ForecastData } from '../types';

  $: forecastData = $forecastStore;
</script>

<div>
  {#if forecastData}
    <h2 class="text-2xl font-bold mb-2">5-Day Forecast</h2>
    <ul>
      {#each forecastData as forecast}
        <li>
          <p>Date: {forecast.date}</p>
          <p>Temperature: {forecast.temperature}°C</p>
          <p>Description: {forecast.description}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>Loading...</p>
  {/if}
</div>
