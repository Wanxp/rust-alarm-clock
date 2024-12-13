
import { load } from '@tauri-apps/plugin-store';
import Cookies from "js-cookie";
import Keys from "@/constant/key.ts";
// when using `"withGlobalTauri": true`, you may use
// const { load } = window.__TAURI__.store;

// Create a new store or load the existing one,
// note that the options will be ignored if a `Store` with that path has already been created

export const getStoreValue = async (key:string, value:any) => {
  const store = await load('store.json', {autoSave: false});
  await store.set(key, value)
  await store.save();
}
export const setStoreValue = async (key:string) => {
  const store = await load('store.json', {autoSave: false});
  const val = await store.get<{ value: number }>(key);
  return val
}




// Set a value.

console.log(val); // { value: 5 }

// You can manually save the store after making changes.
// Otherwise, it will save upon graceful exit
// And if you set `autoSave` to a number or left empty,
// it will save the changes to disk after a debounce delay, 100ms by default.
