import { initialRedering } from "./views/render.js";
import { initialEvent } from "./controllers/eventController.js";
import { updateState } from "./models/state.js";

updateState();
initialRedering();
initialEvent();

const $courseSelect = document.getElementById("course-select");


$courseSelect.addEventListener("change", (e) => {
  console.dir(e.target.value);
});


const $missionSelect = document.getElementById("mission-select");

console.dir($missionSelect);

$missionSelect.addEventListener("change", (e) => {
  console.dir(e.target.value);
});