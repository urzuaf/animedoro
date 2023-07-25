<script lang="ts">
  import Timer from './lib/Timer.svelte'
  import {initialStudyTime, initialAnimeTime} from './utils/timer-store.js'

</script>

<input type="number" bind:value={$initialStudyTime}   />
<input type="number" bind:value={$initialAnimeTime}   />

<Timer />
