import title from "../components/title.js";

export default class VendingMachineView {
  constructor() {
    this.app = document.querySelector("#app");
  }

  render() {
    this.renderTitle();
    this.renderContent();
  }

  renderTitle() {
    this.app.innerHTML = title.header;
  }

  renderContent() {
    const contentContainer = document.createElement("main");
    contentContainer.setAttribute("id", "content-container");
    this.app.appendChild(contentContainer);
  }
}
