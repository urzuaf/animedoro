<script lang="ts">
  import {minutesTo100Seconds , sec100ToEverything,} from "../utils/transforTime";
  import {time, initialTime} from '../utils/timer-store.js'

  
  //number lets asume number is in minutes
  $: time.set(minutesTo100Seconds($initialTime));
  
  $: timeToShow = sec100ToEverything($time);
  
  let running: boolean = false;
  const completedSoundEffect = new Audio('/public/completed-sound-effect.wav')

  const startTimer = () => {
    running = true;
    runTime();
  };
  const stopTimer = () => {
    running = false;
  };

  const runTime = () => {
    let interval = setInterval(() => {
      if (running == false || $time <= 1) {
        clearInterval(interval);
        stopTimer()
      }
      $time <= 10 ? completedSoundEffect.play() : null
      time.update(time => time - 1) 
    }, 100);
  };

  const restartTimer = () => {
  time.set(minutesTo100Seconds($initialTime));
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
