<script>
  import { initialStudyTime, initialAnimeTime, mode, iterations } from "../utils/timer-store";
    let open = false

    const toggleSettingsVisibility = () =>{
        open = !open
    }
</script>

<button on:click={toggleSettingsVisibility} >Settings</button>
{#if open}
<section class="settings">
    <span>Study time : </span>
    <input bind:value={$initialStudyTime} type="range" min="10" max="100" />
    <span>{$initialStudyTime} minutes</span>
    <span>Break time : </span>
    <input bind:value={$initialAnimeTime} type="range" min="5" max="60" /> 
    <span>{$initialAnimeTime} minutes</span>
    <span>
        completed animedoros : {$iterations}
    </span>
</section>
{/if}
<h2>{$mode}</h2>
