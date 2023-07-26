import { writable } from "svelte/store";

// we will use localstorage for autorun and initial times

let studytime = parseInt(localStorage.getItem('studytime'))
let animetime = parseInt(localStorage.getItem('animetime'))
//let autoplay = localStorage.getItem('autorun') === 'true' ? true : false

export const autorun = writable(localStorage.autorun === 'true')

autorun.subscribe((value) => localStorage.autorun = String(value))

export const initialStudyTime = writable(studytime || 40)
export const initialAnimeTime = writable(animetime || 25)
export const time = writable(0)
export const iterations = writable(0)
export const mode = writable('study')
//export const autorun = writable(autoplay)