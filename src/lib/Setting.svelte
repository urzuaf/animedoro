<script>
  import {
    initialStudyTime,
    initialAnimeTime,
    mode,
    iterations,
    autorun
  } from "../utils/timer-store";
  let open = 'close';
  let savedTimes = false
  const toggleSettingsVisibility = () => {
    //when the settings are closed we give it a timeout to run the animation and the we stop desplaying it
    if (open == 'open'){
        open = 'middle'
        setTimeout(() => {
            open ='close' 
        }, 400);
    }
    else{
        open = 'open';
    }
  }
  const saveTimes = () =>{
    localStorage.setItem('studytime', $initialStudyTime.toString())
    localStorage.setItem('animetime', $initialAnimeTime.toString())
    savedTimes = true
    setTimeout(()=>{
      savedTimes = false
    }, 2000)
  }
  const saveAutorun = () =>{
    localStorage.setItem('autorun', $autorun.toString())
  }

  
</script>
{#if open != 'close' }
  <section class= {open == 'open' ? ("settings menuIn" )
  : (open == 'close' ? "hidden" : 'settings menuOut')} >
    <div class={ open == 'open' ? "settingscontainer" : 'hidden'} >
        <div class="studytime">
            <h3>Study time</h3>
            <input bind:value={$initialStudyTime} type="range" min="10" max="120" class="studytime" />
            <span>{$initialStudyTime} minutes</span>
        </div>
        <div class="breaktime">
            <h3>Break time</h3>
            <input bind:value={$initialAnimeTime} type="range" min="5" max="60" class="animetime" />
            <span>{$initialAnimeTime} minutes</span>
        </div>
        <div class="savetime">
          <button on:click={saveTimes} disabled={savedTimes} class="savebtn">{savedTimes ? 'Times saved !' : 'Save configuration'}</button>
        </div>
        <div class="autorun">
          <input class="cbox" name="setautorun" bind:checked={$autorun} on:change={saveAutorun} type="checkbox" />
          <label for = "setautorun">Autostart next timer</label>
        </div>
        <span class="iterations">
          Completed animedoros: {$iterations}
        </span>
    </div>
  </section>
{/if}
<div class="modecontainer">
  <h2 class="mode">{$mode}</h2>
  <div class="wrapper">
    <button class="menu" on:click={toggleSettingsVisibility}>
      <i
        class={open =='open' ? "fa fa-times-circle-o" : "fa fa-bars"}
        aria-hidden="true"
      />
    </button>
  </div>
</div>

<style>
  .cbox{
    accent-color: #716C9F;
  }
  .autorun{
    margin-top: 1rem;
  }
  .menu {
    top: 8vh;
    color: #fafaea;
    border: none;
    background-color: transparent;
    font-size: calc(2rem + 1vw);
    font-weight: 400;
    opacity: 0.6;
    z-index: 100;
    transition: 0.2s ease;
    cursor: pointer;
    position: absolute;
  }
  .menu:hover {
    transition: 0.2s ease;
    transform: scale(1.05);
  }
  .modecontainer {
    position: relative;
    padding: 1rem;
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
  }
  .wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .mode {
    flex: 55%;
    font-weight: 800;
    font-size: calc(2rem + 5vw);
    padding: 1rem;
    text-align: center;
    color: #fafaea;
    opacity: 0.5;
    transition: 0.2s ease;
  }
  .settings{
    position: absolute;
    z-index: 3;
    width: 50%;
    height: 100%;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    border-radius:8px 0 0 8px;
    background-color: #434343;
    /* add a shadow */
    -webkit-box-shadow: -9px 6px 36px -6px rgba(84,84,84,1);
-moz-box-shadow: -9px 6px 36px -6px rgba(84,84,84,1);
box-shadow: -9px 6px 36px -6px rgba(84,84,84,1);

  } 
  .settingscontainer{
    margin:0 auto;
    padding: .3em;
    color: #fafaea;
    font-size: calc(0.5rem + 1vw);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .4rem;
  }

  .iterations{
    font-size : 1.2rem;
  }
  
  .savebtn{
    padding:.4rem 1rem;
    width: fit-content;
    border-radius: 8px;
    color: white;
    transition: .2s ease;
    cursor: pointer;
    font-size: 1rem;
    background-color: #716C9F;
    outline: none;
    border: none;
  }
  .savebtn:hover{
    transition: .2s ease;
    background-color: #7e78b1;
  }
  label{
    font-size: 1.2rem;
  }
  .studytime, .breaktime{
    width: 90%;
    display: flex;
    gap: .2rem;
    flex-direction: column;
    font-size: 1.2rem;
    padding: .5rem;
  }
  .iterations{
    padding-top: 1rem;
  }
  input[type="range"]{
    width: 80%;
  }
  .studytime{
    accent-color: #B8375E;
  }
  .animetime{
    accent-color:#737BB2; 
  }
  .hidden{
    display: none;
  }
  
  @media (max-width : 650px){
    .settings{
        width: 80%;
    }
  }
    @media (max-width : 400px){
    .settings{
        width: 100%;
        border-radius: 0;
    }
  }
  @media (max-height : 700px){
    .settingscontainer{
        max-width: 80%;
    }
  }
   @media (max-height : 460px){
    .settings{
        max-width: 80%;
        font-size: 0.5rem;
        padding: 0;
    }
    .studytime, .breaktime, .iterations{
      font-size: .8rem;
    }
  }
  .menuIn{
    animation: in 0.2s ease-in-out;
  }
  .menuOut{
    animation: out 0.6s ease-in-out;
  }
  @keyframes in {
    from {
        transform: translateX(100vw);
    }
    to{
        transform: translateX(0);
    }
  }
 @keyframes out {
    0% {
        transform: translateX(0);
    }
    50%{
        transform: translateX(100vw) ;

    }
    100%{
        transform: translateX(200vw) ;
    }
  }

</style>
