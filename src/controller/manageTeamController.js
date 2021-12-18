import { crew } from "../component/crew.js";
import { teamMatching } from "../component/teamMatching.js";
import {
  COURSE_ID,
  FRONT_END,
  BACK_END,
  MISSION_ID,
  MATCHING_FORM_INPUT,
} from "../util/constant.js";
import {
  renderBackEndMission,
  renderFrontEndMission,
  renderResultMissionBackEnd,
  renderResultMissionFrontEnd,
} from "../view/manageTeamView.js";

export const onClickCheckButton = event => {
  event.preventDefault();
  const course = document.getElementById(COURSE_ID).value;
  const mission = document.getElementById(MISSION_ID).value;
  if (course === FRONT_END) {
    renderFrontEndMission(mission, teamMatching.frontEndMatching[`${mission}`]);
  } else if (course === BACK_END) {
    renderBackEndMission(mission, teamMatching.backEndMatching[`${mission}`]);
  }
};

const createTeamArray = (people, input) => {
  let array = [];
  while (people >= input) {
    array.push(input);
    people -= input;
  }

  let i = 0;
  for (; i < people; i++) {
    array[i]++;
  }

  return array;
};

const createMemberArray = peopleCount => {
  let array = [];
  let i = 0;
  for (; i < peopleCount; i++) {
    array.push(i);
  }

  return array;
};

const matchingFrontEnd = (peopleArray, membersIndex) => {
  let result = [];
  let index = 0;
  let i = 0;
  let j = 0;
  for (; i < peopleArray.length; i++) {
    let array = [];
    for (j = 0; j < peopleArray[i]; j++) {
      array.push(crew.frontEndMembers[membersIndex[index++]]);
    }
    result.push(array);
  }

  return result;
};

const matchingBackEnd = (peopleArray, membersIndex) => {
  let result = [];
  let index = 0;
  let i = 0;
  let j = 0;
  for (; i < peopleArray.length; i++) {
    let array = [];
    for (j = 0; j < peopleArray[i]; j++) {
      array.push(crew.backEndMembers[membersIndex[index++]]);
    }
    result.push(array);
  }

  return result;
};

const matchingFrontEndMembers = (mission, input) => {
  const peopleCount = crew.frontEndMembers.length;
  const peopleArray = createTeamArray(peopleCount, input);
  const memberIndexArray = createMemberArray(peopleCount);
  const membersIndex = MissionUtils.Random.shuffle(memberIndexArray);

  teamMatching.frontEndMatching[`${mission}`] = matchingFrontEnd(
    peopleArray,
    membersIndex
  );
};

const matchingBackEndMembers = (mission, input) => {
  const peopleCount = crew.backEndMembers.length;
  const peopleArray = createTeamArray(peopleCount, input);
  const memberIndexArray = createMemberArray(peopleCount);
  const membersIndex = MissionUtils.Random.shuffle(memberIndexArray);

  teamMatching.backEndMatching[`${mission}`] = matchingBackEnd(
    peopleArray,
    membersIndex
  );
};

export const onClickMatchingButton = event => {
  event.preventDefault();
  const course = document.getElementById(COURSE_ID).value;
  const mission = document.getElementById(MISSION_ID).value;
  const input = document.getElementById(MATCHING_FORM_INPUT).value;

  if (course === FRONT_END) {
    matchingFrontEndMembers(mission, parseInt(input));
    renderResultMissionFrontEnd(
      mission,
      teamMatching.frontEndMatching[`${mission}`]
    );
  } else if (course === BACK_END) {
    matchingBackEndMembers(mission, parseInt(input));
    renderResultMissionBackEnd(
      mission,
      teamMatching.backEndMatching[`${mission}`]
    );
  }
};
