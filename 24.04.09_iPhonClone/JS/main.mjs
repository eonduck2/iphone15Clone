import { test } from "./module/funcs.js";

console.log(test);

const audio = document.querySelector("#audio");

window.onload = () => {
  audio.volume = 1;
};

console.dir(audio);
