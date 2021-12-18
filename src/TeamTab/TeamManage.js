import Crew from "../Model/Crew.js";
import TeamManageTemplate from "./TeamManageTemplate.js";
import checkMemberCount from "./CheckMemberCount.js";

export default class TeamManage {
  constructor() {
    this.template = TeamManageTemplate();
    this.mainScreen = document.createElement("main");
    this.mainScreen.innerHTML = this.template;
    this.crew = new Crew();
    this.kindOfCrew = 0;
    document.getElementById("app").append(this.mainScreen);
    document.getElementById("not-match").style.display = "none";
    document.getElementById("match").style.display = "none";
    this.connectEvent();
  }

  connectEvent() {
    document.getElementById("show-team-matcher-button").onclick =
      this.matchCourseAndButton.bind(this);
    document.getElementById("match-team-button").onclick =
      this.matchMemeber.bind(this);
  }

  matchCourseAndButton(e) {
    e.preventDefault();
    const courseValue = document.getElementById("course-select").value;
    const missionValue = document.getElementById("mission-select").value;
    this.setCourse(courseValue);
    this.setMission(missionValue);
    this.changeTitle();
    document.getElementById("not-match").style.display = "block";
    this.makeCrewList();
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

  makeCrewList() {
    const crewMembersList = document.getElementById("crew_list");
    crewMembersList.innerHTML = "";
    const crewMembers = this.crew.getCrew(this.kindOfCrew);
    console.log(crewMembers);
    crewMembers.forEach((name) => {
      const crewRow = document.createElement("li");
      crewRow.innerHTML = name;
      crewMembersList.append(crewRow);
    });
  }

  matchMemeber(e) {
    e.preventDefault();
    const memberCount = document.getElementById(
      "team-member-count-input"
    ).value;
    if (
      checkMemberCount(memberCount, this.crew.getCrew(this.kindOfCrew).length)
    ) {
      this.makeGroup(Number(memberCount));
    }
  }

  makeGroup(memberCount) {
    let numArray = [...Array(this.crew.getCrew(this.kindOfCrew).length)].map(
      (v, i) => i
    );
    const lineMembers = MissionUtils.Random.shuffle(numArray);

    const member = this.crew.getCrew(this.kindOfCrew);
    const totalMember = member.length;
    const totalGroupCount = parseInt(totalMember / lineMembers, 10);
    const moreMemberGroupCount = totalMember - memberCount * totalGroupCount;
    document.getElementById("not-match").style.display = "none";
    document.getElementById("match").style.display = "block";
    this.newMemberList = document.getElementById("team-match-result");
    this.newMemberList.innerHTML = "";
    this.makeMemberList(
      member,
      totalGroupCount,
      moreMemberGroupCount,
      memberCount
    );
  }

  makeMemberList(inputMember, totalGroupCount, moreMemberGroupCount, memberCount) {
      console.log(
        inputMember, totalGroupCount, moreMemberGroupCount, memberCount
      );
    const member = inputMember;
    let i = 0;
    for (; i < moreMemberGroupCount; i += 1) {
      const newMemberGroup = document.createElement("li");
      const newMember = member.splice(0, memberCount+1);
      const totalMember = this.crew.getCrew(this.kindOfCrew);
      const newMeberList = newMember.map((index) => totalMember[index]);
      newMemberGroup.innerHTML = newMeberList.join(",");
      this.newMemberList.append(newMemberGroup);
    }
    for (; i < totalGroupCount; i += 1) {
      const newMemberGroup = document.createElement("li");
      const newMember = member.splice(0, memberCount);
      const totalMember = this.crew.getCrew(this.kindOfCrew);
      const newMeberList = newMember.map((index) => totalMember[index]);
      newMemberGroup.innerHTML = newMeberList.join(",");
      this.newMemberList.append(newMemberGroup);
    }
  }

  update() {
    this.makeCrewList();
    return this.mainScreen;
  }

  tabSection() {
    // return document.getElementById("team-manage-main");
    return this.mainScreen;
  }
}
