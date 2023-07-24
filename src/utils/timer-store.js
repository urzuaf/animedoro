import { writable } from "svelte/store";

export const initialTime = writable(1)
export const time = writable(0)