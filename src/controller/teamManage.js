import { getCrewLocalStorage } from "../data/localStorage.js";
import { teamMatchingDOM } from "../view/teamDOM.js";

//이벤트 리스너 초기화
export const initTeamManage = () => {
  selectMission();
  loadListData();
  teamMatching();
};

export const selectMission = () => {
  const $button = document.querySelector("#show-team-matcher-button");

  $button.addEventListener('click', e => {
    e.preventDefault();
    
    teamMatchingDOM();
  });
};

//사람들을 랜덤으로 배치
export const randomMatchLogic = (limit) => {
  const nameList = getCrewLocalStorage();
  const result = [];
  let arrLength = nameList.length;
  let index = 0;

  while(arrLength !== 0) {
    let teamNum = MissionUtils.Random.pickNumberInRange(0, arrLength);

    if(teamNum >= limit) {
      const teamArr = nameList.slice(index, index+teamNum);
      result.push(teamArr);
      arrLength -= teamNum;
      index += teamNum;
    }
  };

  return result;
}

//팀 매칭 버튼을 눌렀을 때 이벤트
export const teamMatching = () => {
  const $button = document.querySelector("#match-team-button");
  const $input = document.querySelector("#team-member-count-input");

  $button.addEventListener("click", e => {
    e.preventDefault();

    console.log(randomMatchLogic(Number($input.value)));    
    $input.value = "";
  });
};

export const loadListData = () => {
  const $list = document.querySelector("#team-match-none-list");
  const data = getCrewLocalStorage();

  console.log(data)
  if(data !== null) {
    data.forEach((names) => $list.innerHTML += `<li>${names}</li>`);
  }
};