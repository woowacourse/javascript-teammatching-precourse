import manageCrew from "../components/manage-crew-page.js";

export default class ManageCrewView {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }
  render() {
    this.contentContainer.innerHTML = manageCrew.body;

    const front = document.querySelectorAll(".front");
    const back = document.querySelectorAll(".back");
    front.forEach((ele) => {
      ele.style.display = "none";
    });
    back.forEach((ele) => {
      ele.style.display = "none";
    });
  }
}
