import manageCrew from "../components/manage-crew-page.js";
import { getData } from "../utils/localStorage.js";

export default class ManageCrewView {
  constructor() {
    this.contentContainer = document.querySelector("#content-container");
  }

  initialize() {
    this.contentContainer.innerHTML = manageCrew.body;
    const front = document.querySelectorAll(".front");
    const back = document.querySelectorAll(".back");
    front.forEach((ele) => {
      ele.style.display = "none";
    });
    back.forEach((ele) => {
      ele.style.display = "none";
    });
    this.render();
  }

  render() {
    if (getData("frontend") !== null) {
      this.renderCrewTable(getData("frontend"), getData("backend"));
    }
  }

  renderCrewTable(fcrews, bcrews) {
    this.table = document.querySelectorAll(".crew-table > tbody");
    fcrews.forEach((crew, index) => {
      this.table[0].innerHTML += manageCrew.table(crew, index);
    });

    bcrews.forEach((crew, index) => {
      this.table[1].innerHTML += manageCrew.table(crew, index);
    });
  }
}
