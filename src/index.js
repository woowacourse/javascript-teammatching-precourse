import { setLocalStorage } from "./model/localStorage.js";
import InitialView from "./view/InitialView.js";

window.onload = () => {
  new InitialView(document.getElementById("app")).render();
  setLocalStorage();
};
