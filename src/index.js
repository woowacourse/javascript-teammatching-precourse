import { initialRedering } from "./views/render.js";
import { initialEvent } from "./controllers/eventController.js";
import { updateState } from "./models/state.js";

updateState();
initialRedering();
initialEvent();