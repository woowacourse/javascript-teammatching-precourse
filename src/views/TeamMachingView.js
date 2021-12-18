import title from "../components/title.js";

export default class VendingMachineView {
  constructor() {
    this.app = document.querySelector("#app");
  }

  render() {
    this.renderTitle();
  }

  renderTitle() {
    this.app.innerHTML = title.header;
  }
}
