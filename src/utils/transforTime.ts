type time = {
    hour : number,
    minutes: number,
    seconds: number,
    sec100 : number
}

const minutesTo100Seconds = (min : number) : number =>{
    return min * 60 * 10
}
const sec100ToEverything= (sec100 : number) : time=>{
   let cont = sec100
   let time : time = {
    hour : 0,
    minutes: 0,
    seconds: 0,
    sec100 : sec100
  }
  while (cont > 0){
    console.log(time.sec100)
    time.sec100 += 1
    cont -= 1
    if (time.sec100 > 99){
       time.seconds += 1
       time.sec100 -= 100 
    }
    if (time.seconds > 59){
        time.minutes += 1
        time.seconds -= 60
    }
    if (time.minutes > 59){
        time.hour += 1
        time.minutes -= 60
    }
  }

  return time
} 

export {
    minutesTo100Seconds,
    sec100ToEverything
}