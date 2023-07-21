<script lang="ts">
  export let initialTime: number = 1;
  let running: boolean = false;

   //number lets asume number is in minutes
   let time = initialTime * 60 * 10 

  const startTimer = () => {
    running = true;
    runTime();
  };
  const stopTimer = () => {
    running = false;
  };

  const runTime = () => {
    let interval = setInterval(() => {
      if ( running == false || time <= 1 ) {
        clearInterval(interval);
      }
      time -= 1;
    }, 100);
  };

  const restartTimer = () =>{
      time = initialTime 
  }

</script>

<h2>{time}</h2>
{#if running}
  <button on:click={stopTimer}>stop</button>
  <button on:click={restartTimer}>restart</button>
{:else}
  <button on:click={startTimer}>run</button>
  <button on:click={restartTimer}>restart</button>
{/if}
