<script lang="ts">
  import Timer from "./lib/Timer.svelte";
  import Settings from "./lib/Setting.svelte";
  import { mode } from "./utils/timer-store";
</script>

<main class={$mode == 'study' ? 'studyBackground': 'animeBackground'  }>
  <Settings />
  <Timer />
</main>

<style>
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-width: 250px;
    position: relative;
  }
  .studyBackground {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
  .animeBackground {
    background: linear-gradient(-45deg, #513252, #FF9F45, #7A4069, #9FC088);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite; 
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
</style>
