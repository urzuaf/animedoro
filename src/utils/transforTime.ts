import { type time } from "./types"

const minutesToSeconds = (min : number) : number =>{
    return min * 60 
}
const secsToEverything= (secs : number) : time=>{
   let time : time = {
    hour : 0, 
    minutes: 0,
    seconds: 0
  }

  let aux = secs

  if ( aux >= ( 60 * 60)){
    time.hour = Math.floor(aux / ( 60 * 60))
    aux = aux % ( 60 * 60)
  }
  if ( aux >= (60)){
    time.minutes = Math.floor(aux / (60))
    aux = aux % (60 )
  }   
    time.seconds = Math.floor(aux)

  return time
} 

export {
    minutesToSeconds,
   secsToEverything 
}