<script lang="ts">
  import { minutesToSeconds, secsToEverything } from "../utils/transforTime";
  import {
    time,
    initialStudyTime,
    initialAnimeTime,
    iterations,
    mode
  } from "../utils/timer-store.js";
  import { type timer } from "../utils/types";
  //number lets asume number is in minutes
  $: time.set(minutesToSeconds($initialStudyTime));
  //convert time in minutes to the corresponding time in hours, mins, seconds
  $: timeToShow = secsToEverything($time);

  let state: timer = {
    running: false,
    skipable: true,
  };
  let interval;

  const completedSoundEffect = new Audio("/completed-sound-effect.wav");

  const runTime = () => {
    interval = setInterval(() => {
      if (state.running == false || $time <= 1) {
        clearInterval(interval);
        stopTimer();
      }
      if ($time <= 1) {
        completedSoundEffect.play();
        if ($mode == 'study'){
          mode.set('break')  
        }
        else{
          mode.set('study')
          iterations.update($iterations => $iterations + 1)
        }
        $mode == 'study'
          ? time.set(minutesToSeconds($initialStudyTime))
          : time.set(minutesToSeconds($initialAnimeTime));
        startTimer();
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
   $mode == 'study' 
      ? time.set(minutesToSeconds($initialStudyTime))
      : time.set(minutesToSeconds($initialAnimeTime));
  };
  const skip = () => {
    time.set(2);
    state.skipable = false;
    setTimeout(() => {
      state.skipable = true;
    }, 7000);
  };
</script>

<section class="timer glass">
  <h2 class="title">
    {timeToShow.hour >= 10 ? timeToShow.hour : "0" + timeToShow.hour}
    :
    {timeToShow.minutes >= 10 ? timeToShow.minutes : "0" + timeToShow.minutes}
    :
    {timeToShow.seconds >= 10 ? timeToShow.seconds : "0" + timeToShow.seconds}
  </h2>
  <div class="buttons">
    {#if state.running}
    <button class="btn" on:click={stopTimer}><i class="fa fa-stop-circle-o" aria-hidden="true"></i>
</button>
    {:else}
    <button class="btn" on:click={startTimer}><i class="fa fa-play-circle-o" aria-hidden="true"></i>
</button>
    {/if}
    <button class="btn" on:click={restartTimer}><i class="fa fa-refresh" aria-hidden="true"></i>
</button>
    <button class="btn" on:click={skip} disabled={!state.skipable}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>
  </div>
</section>


<style>
  .timer {
    margin: auto ;
    background-color: red;
    width: 90%;
    height: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0.4rem;
  }
  .title{
    font-size: calc(2rem + 8vw);
    color: #fafaea;
  }
  .glass{
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 1rem;
    border: 1px solid  rgba(255,255,255,0.18);
    box-shadow: 0 8px 32px 0  rgba(0,0,0,0.37);
  }    
  .buttons{
    max-width: 100%;
    min-width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  .btn{
    background-color: transparent;
    border: none;
    font-size: calc(2rem + 3vw);
    cursor: pointer;
    transition: 0.2s ease;
    color: #fafaea;
  }
  .btn:hover{
    transition: 0.2s ease;
    transform: scale(1.05);
  }
  .btn:disabled{
    opacity: 0.6;
    pointer-events: none;
  }
  

</style>



























