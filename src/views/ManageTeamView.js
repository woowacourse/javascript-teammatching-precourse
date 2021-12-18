import manageTeam from "../components/manage-team-page.js";

export default class ManageCrewView {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }
  render() {
    this.contentContainer.innerHTML = manageTeam.body;
  }
}
