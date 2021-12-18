import CommonView from "../view/commonView.js";
import ManageCrewView from "../view/manageCrewView.js";
import TeamMatchingView from "../view/teamMatchingView.js";

export default class Controller {
  constructor() {
    this.commonView = new CommonView().init();
    this.manageCrewView = new ManageCrewView();
    // this.teamMathcingView = new TeamMatchingView();

    this.onClickCrewManageBtn(); // 크루 관리 버튼 클릭 시
  }

  onClickCrewManageBtn() {
    const $crewManageBtn = document.querySelector("#crew-tab");
    $crewManageBtn.addEventListener("click", () => {
      this.manageCrewView.showChooseCrew();
      this.onClickCourseRadio();
    });
  }

  onClickCourseRadio() {
    const $frontend = document.querySelector('input[value="frontend"]');
    const $backend = document.querySelector('input[value="backend"]');
    $frontend.addEventListener("click", () => {
      this.manageCrewView.showCrewList("frontend");
    });
    $backend.addEventListener("click", () => {
      this.manageCrewView.showCrewList("backend");
    });
  }
}
