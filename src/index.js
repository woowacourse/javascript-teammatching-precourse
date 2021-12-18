import { $ } from "./common/dom.js";
import App from "./components/App.js";
import store from "./storage/Store.js";

class ManageBoard {
  constructor() {
    this.$target = $("#app");
    this.app = new App(this.$target);
    store.subscribe(() => {
      this.app.render();
    });
  }
}

const manageBoard = new ManageBoard();

export default manageBoard;
