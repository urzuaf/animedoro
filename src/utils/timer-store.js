import { writable } from "svelte/store";

// we will use localstorage for autorun and initial times

export const initialStudyTime = writable(40)
export const initialAnimeTime = writable(25)
export const time = writable(0)
export const iterations = writable(0)
export const mode = writable('study')
export const autorun = writable(true)