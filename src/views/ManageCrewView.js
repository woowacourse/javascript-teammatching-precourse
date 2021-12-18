import manageCrew from "../components/manage-crew-page.js";

export default class ManageCrewView {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }
  render() {
    this.contentContainer.innerHTML = manageCrew.body;
  }
}
