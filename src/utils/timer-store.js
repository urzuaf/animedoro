import { writable } from "svelte/store";

export const initialStudyTime = writable(40)
export const initialAnimeTime = writable(25)
export const time = writable(0)
export const mode = writable('study')