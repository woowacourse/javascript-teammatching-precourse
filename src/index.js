import InitialView from "./view/InitialView.js";

window.onload = () => {
  new InitialView(document.getElementById("app")).render();
};
