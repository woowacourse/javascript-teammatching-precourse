import { onClickRematchButton, onClickTeamMatchButton } from "../../controllers/teamManager/eventHandlers.js";
import { OPTIONS } from "../../utils/constants.js";

const getCourseName = courseName => {
  const { course } = OPTIONS;
  let name = "";

  if (courseName === course[0]) {
    name = "프론트엔드";
  } else if (courseName === course[1]) {
    name = "백엔드";
  }

  return name;
};

const getMissionName = missionValue => {
  const { mission } = OPTIONS;
  let name = "";

  for (let i = 0; i < OPTIONS.mission.length; i++) {
    if (mission[i].value === missionValue) {
      name = mission[i].name;
      break;
    }
  }

  return name;
};

const addCrewList = course => {
  const crews = JSON.parse(localStorage.getItem("crews"));
  let crewList = "";

  if (crews) {
    const crewArr = crews.split(",");
    for (let i = 0; i < crewArr.length; i++) {
      const info = crewArr[i].split("/");
      if (info[0] === course) {
        crewList += `<li>${info[1]}</li>`;
      }
    }
  }

  return `
    <ul>${crewList}</ul>
  `;
};

const showIfNoTeam = (course, mission) => {
  const $section = document.getElementById("team-maching");

  $section.innerHTML = `
    <h3>${getCourseName(course)} ${getMissionName(mission)} 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
          <label>1팀당 인원 수</label>
          <input id="team-member-count-input" type="number" />
          <button id="match-team-button">팀 매칭</button>
        </form>
      </div>
      <h4>크루 목록</h4>
      ${addCrewList(course)}
    </div>
  `;
};

const insertTeams = teamStr => {
  const teams = teamStr.split(",");
  let teamList = "";

  for (let i = 0; i < teams.length; i++) {
    teamList += `<li>${teams[i].split("/").join(",")}</li>`;
  }

  return `
    <ul id="team-match-result">
      ${teamList}
    </ul>
  `;
};

const showIfTeamIs = (course, mission, teamStr) => {
  const $section = document.getElementById("team-maching");

  $section.innerHTML = `
    <h3>${getCourseName(course)} ${getMissionName(mission)} 조회</h3>
    <p>팀이 매칭되었습니다.</p>
    ${insertTeams(teamStr)}
    <p>
      팀을 재매칭 하시겠습니까?
      <button id="rematch-team-button">재매칭</button>
    </p>
  `;

  onClickRematchButton();
};

const showTeam = (course, mission) => {
  const teams = JSON.parse(localStorage.getItem(`${course}-${mission}`));

  if (teams) {
    showIfTeamIs(course, mission, teams);
  } else {
    showIfNoTeam(course, mission);
    onClickTeamMatchButton();
  }
};

export { showTeam };
