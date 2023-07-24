<script lang="ts">
  import Timer from './lib/Timer.svelte'
  import {initialTime} from './utils/timer-store.js'

</script>

<input type="number" bind:value={$initialTime}   />

<Timer />
