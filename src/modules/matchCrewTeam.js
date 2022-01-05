import { INDEX_KEY, NAME_KEY } from '../constants/constants.js';
import store from '../store/store.js';
import createRandomNumber from './createRandomNumber.js';

function createCrewNumberList(totalCrew) {
  return totalCrew.map((obj) => {
    return obj[INDEX_KEY];
  });
}

function createCrewObj(teamCount) {
  let crewList = [];
  for (let i = 0; i < teamCount; i++) {
    crewList.push([]);
  }
  return crewList;
}

function findCrewName(totalCrew, index) {
  return totalCrew[index - 1][NAME_KEY];
}

function createRandomCrewList(randomCrew, totalCrew, teamCount) {
  let crewList = createCrewObj(teamCount);
  let listindex = 0;
  while (randomCrew) {
    if (randomCrew.length == 0) {
      break;
    }
    if (listindex === teamCount) {
      listindex = 0;
    }
    crewList[listindex].push(findCrewName(totalCrew, randomCrew.pop()));
    listindex++;
  }
  return crewList;
}
export default function matchCrewTeam(courseName, teamNum) {
  const totalCrew = store.getLocalStorage(courseName);
  let randomCrew = createRandomNumber(createCrewNumberList(totalCrew));
  const teamCount = parseInt(totalCrew.length / teamNum);
  return createRandomCrewList(randomCrew, totalCrew, teamCount);
}
