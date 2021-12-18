import { crewInfo } from "./utils/constants.js";
import { hideElement, showElement } from "./utils/setElement.js";

export default class ManageCrewView {
  constructor() {
    this.render();
    this.hideAll();
  }

  render() {
    const $header = document.querySelector("#manage-header");
    const $render = document.createElement("main");
    $render.innerHTML = crewInfo;
    $header.after($render);
  }

  hideAll() {
    hideElement(document.querySelector("#choose-crew"));
    hideElement(document.querySelector("#crew-name"));
    hideElement(document.querySelector("#crew-list"));
  }

  showChooseCrew() {
    showElement(document.querySelector("#choose-crew"));
  }

  showCrewList(course) {
    const $title = document.querySelector("#crew-name").children[0];
    const $listTitle = document.querySelector("#crew-list").children[0];
    if (course === "frontend") {
      $title.innerHTML = "프론트엔드 크루 관리";
      $listTitle.innerHTML = "프론트엔드 크루 목록";
    }
    if (course === "backend") {
      $title.innerHTML = "백엔드 크루 관리";
      $listTitle.innerHTML = "백엔드 크루 목록";
    }

    showElement(document.querySelector("#crew-name"));
    showElement(document.querySelector("#crew-list"));
  }

  reloadTable(crewList) {
    const $table = document.querySelector("#crew-table").children[1];
    $table.innerHTML = "";
    crewList.forEach((crew, idx) => {
      $table.innerHTML += `<tr>
            <td>${idx + 1}</td>
            <td>${crew}</td>
            <td>
              <button id="delete-crew-buttton">삭제</button>
            </td>
          </tr>`;
    });
  }
}
