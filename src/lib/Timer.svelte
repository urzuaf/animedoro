<script lang="ts">
  import {
    minutesToSeconds,
    secsToEverything,
  } from "../utils/transforTime";
  import {
    time,
    initialStudyTime,
    initialAnimeTime,
  } from "../utils/timer-store.js";
  import { type timer } from "../utils/types";

  //number lets asume number is in minutes
  $: time.set(minutesToSeconds($initialStudyTime));
  //convert time in minutes to the corresponding time in hours, mins, seconds
  $: timeToShow = secsToEverything($time);

  let state: timer = {
    running: false,
    study: true,
  };
  let skipable = true;
  let interval

  const completedSoundEffect = new Audio("/completed-sound-effect.wav");

  const runTime = () => {
    interval = setInterval(() => {
      if (state.running == false || $time <= 1) {
        clearInterval(interval);
        stopTimer();
      }
      if ($time <= 1) {
        completedSoundEffect.play();
        state.study = !state.study;
        state.study
          ? time.set(minutesToSeconds($initialStudyTime))
          : time.set(minutesToSeconds($initialAnimeTime));
        startTimer()
      }
      if (state.running) time.update((time) => time - 1); 
      
    }, 1000);
  };

  // Timer functions
  const startTimer = () => {
    state.running = true;
     runTime();
  };
  const stopTimer = () => {
    state.running = false;
  };
  const restartTimer = () => {
    state.study
      ? time.set(minutesToSeconds($initialStudyTime))
      : time.set(minutesToSeconds($initialAnimeTime))
  };
  const skip = () => {
    time.set(2);
    skipable = false;
    setTimeout(() => {
      skipable = true;
    }, 7000);
  };
</script>

<h2>
  {timeToShow.hour >= 10 ? timeToShow.hour : "0" + timeToShow.hour}
  :
  {timeToShow.minutes >= 10 ? timeToShow.minutes : "0" + timeToShow.minutes}
  :
  {timeToShow.seconds >= 10 ? timeToShow.seconds : "0" + timeToShow.seconds}
</h2>
{#if state.running}
  <button on:click={stopTimer}>stop</button>
  <button on:click={restartTimer}>restart</button>
  {#if skipable}
  <button on:click={skip}>skip</button>
  {/if}
{:else}
  <button on:click={startTimer}>run</button>
  <button on:click={restartTimer}>restart</button>
   {#if skipable}   
  <button on:click={skip}>skip</button>
    {/if}
{/if}

<h2>{state.study ? "study" : "anime"}</h2>
