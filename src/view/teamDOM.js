import { selectMission, teamMatching_before, teamMatching_after } from "../constants/doms.js";

export const initTeamDOM = () => {
  document.body.innerHTML += selectMission;
  document.body.innerHTML += teamMatching_before;
  document.body.innerHTML += teamMatching_after;
};  

export const selectMissionDOM = () => {
  const $teamSelectMission = document.querySelector("#team-select-mission");

  $teamSelectMission.style.display = "block";
};

export const teamResultDOM = () => {
  const $teamMatchBefore = document.querySelector("#team-mathing-before");
  const $teamMatchResult = document.querySelector("#team-match-result");

  $teamMatchBefore.style.display = "none";
  $teamMatchResult.style.display = "block";
};


export const teamMatchingDOM = () => {
  const $teamMatchBefore = document.querySelector("#team-mathing-before");
  const $teamMatchResult = document.querySelector("#team-match-result");

  $teamMatchBefore.style.display = "block";
  $teamMatchResult.style.display = "none";
};

//결과 배열 결과 DOM Setting
//param > result: 2중 배열 
export const teamListDOM = (result) => {
  const $teamResultList = document.querySelector("#team-match-done-list");

  const list = result.map((team) => {
    return `
      <li>
        ${
          team.map((name) => {
            return `${name},`;
          })
        }
      </li>
    `;
  });

  $teamResultList.innerHTML = list;
};

