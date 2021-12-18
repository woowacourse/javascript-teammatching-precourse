import TeamManageTemplate from "./TeamManageTemplate.js";

export default class TeamManage {
  constructor() {
    this.template = TeamManageTemplate();
    this.mainScreen = document.createElement("main");
    this.mainScreen.innerHTML = this.template;
    this.kindOfCrew = 0;
    document.getElementById("app").append(this.mainScreen);
    document.getElementById("not-match").style.visibility = "hidden";
    document.getElementById("match").style.visibility = "hidden";
    this.connectEvent();
  }

  connectEvent() {
    document.getElementById("show-team-matcher-button").onclick =
      this.matchCourseAndButton.bind(this);
  }

  matchCourseAndButton(e) {
    e.preventDefault();
    const courseValue = document.getElementById("course-select").value;
    const missionValue = document.getElementById("mission-select").value;
    this.setCourse(courseValue);
    this.setMission(missionValue);
    this.changeTitle();
    document.getElementById("not-match").style.visibility = "visible";
  }

  setCourse(courseValue) {
    if (courseValue === "frontend") {
      this.kindOfCrew = 0;
      this.course = "프론트엔드";
    }
    if (courseValue === "backend") {
      this.kindOfCrew = 1;
      this.course = "백엔드";
    }
  }

  setMission(missionValue) {
    if (missionValue === "baseball") this.mission = "숫자야구게임";
    if (missionValue === "racingcar") this.mission = "자동차경주";
    if (missionValue === "lotto") this.mission = "로또";
    if (missionValue === "shopping-cart") this.mission = "장바구니";
    if (missionValue === "payments") this.mission = "결제";
    if (missionValue === "subway") this.mission = "지하철노선도";
    if (missionValue === "performance") this.mission = "성능개선";
    if (missionValue === "deploy") this.mission = "배포";
  }

  changeTitle() {
    document.getElementById(
      "not-match-title"
    ).innerHTML = `${this.course} ${this.mission} 미션의 팀 매칭`;
    document.getElementById(
      "match-title"
    ).innerHTML = `${this.course} ${this.mission} 조회`;
  }

  tabSection() {
    // return document.getElementById("team-manage-main");
    return this.mainScreen;
  }
}
