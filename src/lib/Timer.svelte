
<script lang="ts">
   export let time : number = 40 
   let running : boolean = false 

   const runTime = () =>{
      let intervak = setInterval(()=>{
         time -= 1
         if (time == 0){
            clearInterval(intervak)
         }
      }, 100)
   }

</script>

<h2>{time}</h2>
<button on:click={runTime}>run</button>


