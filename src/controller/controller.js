import CrewModel from "../model/crewModel.js";
import CommonView from "../view/commonView.js";
import ManageCrewView from "../view/manageCrewView.js";
import TeamMatchingView from "../view/teamMatchingView.js";

export default class Controller {
  constructor() {
    this.commonView = new CommonView().init();
    this.manageCrewView = new ManageCrewView();
    this.teamMathcingView = new TeamMatchingView();
    this.crewModel = new CrewModel();
    this.onClickCrewManageBtn(); // 크루 관리 버튼 클릭 시
    this.onClickTeamTab(); // 팀 매칭 관리 클릭 시
  }

  // 크루 관리 탭
  onClickCrewManageBtn() {
    const $crewManageBtn = document.querySelector("#crew-tab");
    $crewManageBtn.addEventListener("click", () => {
      this.teamMathcingView.hideAll();
      this.manageCrewView.showChooseCrew();
      this.onClickCourseRadio();
    });
  }

  // 크루 관리 탭 - 관리할 코스 선택
  onClickCourseRadio() {
    const $frontend = document.querySelector('input[value="frontend"]');
    const $backend = document.querySelector('input[value="backend"]');
    $frontend.addEventListener("click", (e) => {
      e.preventDefault();
      this.manageCrewView.showCrewList("frontend");
      this.onClickCrewAdd("frontend");
    });
    $backend.addEventListener("click", (e) => {
      e.preventDefault();
      this.manageCrewView.showCrewList("backend");
      this.onClickCrewAdd("backend");
    });
  }

  // 크루 관리 탭 - 크루 추가 이름 작성
  onClickCrewAdd(type) {
    const $addBtn = document.querySelector("#add-crew-buttton");
    $addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const name = document.querySelector("#crew-name-input").value;
      this.crewModel.addCrew(type, name);
      if (type === "frontend") {
        this.manageCrewView.reloadTable(this.crewModel.frontCrew);
        this.onClickDelete(type);
        return;
      }
      this.manageCrewView.reloadTable(this.crewModel.backCrew);
      this.onClickDelete(type);
    });
  }

  // 크루 관리 탭 - 크루 삭제 버튼 클릭
  onClickDelete(type) {
    document.querySelectorAll("#delete-crew-buttton").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const name = e.target.parentNode.parentNode.children[1].innerHTML;
        const result = window.confirm("정말 삭제하시겠습니까?");

        if (type === "frontend" && result) {
          this.crewModel.deleteCrew(type, name);
          this.manageCrewView.reloadTable(this.crewModel.frontCrew);
          this.onClickDelete(type);
          return;
        }
        if (result) {
          this.crewModel.deleteCrew(type, name);
          this.manageCrewView.reloadTable(this.crewModel.backCrew);
          this.onClickDelete(type);
        }
      });
    });
  }

  // 팀 매칭 관리
  onClickTeamTab() {
    const $teamTab = document.querySelector("#team-tab");
    $teamTab.addEventListener("click", (e) => {
      e.preventDefault();
      this.manageCrewView.hideAll();
      this.teamMathcingView.showSelected("#choose-course-mission");
      this.onClickMatcherBtn();
    });
  }

  // 팀 매칭 관리 - 확인 버튼 클릭 시
  onClickMatcherBtn() {
    const $matcherBtn = document.querySelector("#show-team-matcher-button");
    $matcherBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.teamMathcingView.showSelected("#make-team-matching");
    });
  }
}
