<script lang="ts">
  import {
    minutesTo100Seconds,
    sec100ToEverything,
  } from "../utils/transforTime";

  export let initialTime: number = 20;
  let running: boolean = false;

  //number lets asume number is in minutes
  let time = minutesTo100Seconds(initialTime);

  $: timeToShow = sec100ToEverything(time);

  const startTimer = () => {
    running = true;
    runTime();
  };
  const stopTimer = () => {
    running = false;
  };

  const runTime = () => {
    let interval = setInterval(() => {
      if (running == false || time <= 1) {
        clearInterval(interval);
      }
      time -= 1;
    }, 100);
  };

  const restartTimer = () => {
    time = minutesTo100Seconds(initialTime);
  };
</script>

<h2>
  {timeToShow.hour >= 10 ? timeToShow.hour : "0"+timeToShow.hour }
  :
  {timeToShow.minutes>= 10 ? timeToShow.minutes: "0"+timeToShow.minutes}
  :
  {timeToShow.seconds>= 10 ? timeToShow.seconds: "0"+timeToShow.seconds}
</h2>
{#if running}
  <button on:click={stopTimer}>stop</button>
  <button on:click={restartTimer}>restart</button>
{:else}
  <button on:click={startTimer}>run</button>
  <button on:click={restartTimer}>restart</button>
{/if}
