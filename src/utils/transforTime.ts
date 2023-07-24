type time = {
    hour : number,
    minutes: number,
    seconds: number,
}

const minutesTo100Seconds = (min : number) : number =>{
    return min * 60 * 10
}
const sec100ToEverything= (sec100 : number) : time=>{
   let time : time = {
    hour : 0, 
    minutes: 0,
    seconds: 0
  }

  let aux = sec100

  if ( aux >= (10 * 60 * 60)){
    time.hour = Math.floor(aux / (10 * 60 * 60))
    aux = aux % (10 * 60 * 60)
  }
  if ( aux >= (10 * 60)){
    time.minutes = Math.floor(aux / (10 * 60))
    aux = aux % (10 * 60 )
  }   
  if (aux >= 10){
    time.seconds = Math.floor(aux / 10 )
    aux = aux % 10
  }

  return time
} 

export {
    minutesTo100Seconds,
    sec100ToEverything
}