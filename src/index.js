import { $ } from "./common/dom.js";
import App from "./components/App.js";

class ManageBoard {
  constructor() {
    this.$target = $("#app");
    this.app = new App(this.$target);
    this.app.render();
  }
}

const manageBoard = new ManageBoard();

export default manageBoard;
