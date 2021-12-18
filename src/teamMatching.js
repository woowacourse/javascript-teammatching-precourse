import { enterTeamNumber, afterTeamMatch } from './dom.js';
import { getCrewsFromLocalStorage } from './utilsLocalStorage.js';

export const initTeamMatch = () => {
  const courseMissionButton = document.getElementById('show-team-matcher-button');
  courseMissionButton.addEventListener('click', () => showTeamMatch());
};

const showTeamMatch = () => {
  document.getElementById('teamManage').insertAdjacentHTML('afterend', enterTeamNumber);
  const teamNumberButton = document.getElementById('match-team-button');
  teamNumberButton.addEventListener('click', () => onClickTeamMatch());

  let course = document.getElementById('course-select').value;
  let mission = document.getElementById('mission-select').value;

  document.getElementById('course-mission-team-match').innerText = `${course} ${mission}의 팀 매칭`;
  showCrews();
  event.preventDefault();
};

const showCrews = () => {
  const crews = getCrewsFromLocalStorage('crew');
  let course = document.getElementById('course-select').value;
  course = courseTypeChange(course);
  let result = ``;

  console.log(crews);
  for (let i of crews) {
    if (i.course === course) {
      result = `<li>` + i.name + `</li>`;
      document.getElementById('crew-list').insertAdjacentHTML('beforeend', result);
    }
  }
};

const onClickTeamMatch = () => {
  const teamNubmer = document.getElementById('team-member-count-input').value;
  const course = document.getElementById('course-select').value;
  const mission = document.getElementById('mission-select').value;

  cleanShowTeam();
  if (isTeamNumberValid(course, teamNubmer)) {
    teamMatch(course, teamNubmer);
  }
  event.preventDefault();
};

const cleanShowTeam = () => {
  const contents = document.getElementById('enterTeamNumber');
  if (contents) {
    contents.innerHTML = '';
  }
};

const teamMatch = (course, teamNumer) => {
  const crews = getCrewsFromLocalStorage('crew');
  let crewsOfCourse = [];
  let crewsOfCourseIndex = [];
  course = courseTypeChange(course);

  for (let i = 0; i < crews.length; i++) {
    if (crews[i].course === course) {
      crewsOfCourse.push(crews[i]);
      crewsOfCourseIndex.push();
    }
  }

  for (let i = 0; i < crewsOfCourse.length; i++) {
    crewsOfCourseIndex.push(i);
  }

  crewsOfCourseIndex = MissionUtils.Random.shuffle(crewsOfCourseIndex);
  let teams = [];
  const numberOfTeam = parseInt(crewsOfCourse.length / teamNumer);

  for (let i = 0; i < numberOfTeam; i++) {
    teams.push([]);
  }

  for (let i = 0; i < teams.length; i++) {
    let indexs = crewsOfCourseIndex.slice(i * numberOfTeam, (i + 1) * numberOfTeam);
    for (let j of indexs) {
      teams[i].push(crewsOfCourse[j]);
    }
  }

  for (let i = teams.length * numberOfTeam; i < crewsOfCourseIndex.length; i++) {
    teams[i % teams.length].push(crewsOfCourse[crewsOfCourseIndex[i]]);
  }
  showTeams(teams);
  setRematch();
};

const courseTypeChange = (course) => {
  if (course === 'frontend') {
    return 'frontEnd';
  }
  if (course === 'backend') {
    return 'backEnd';
  }
};

const showTeams = (teams) => {
  document.getElementById('teamManage').insertAdjacentHTML('afterend', afterTeamMatch);

  console.log(teams);
  for (let i = 0; i < teams.length; i++) {
    let teamMember = '';
    for (let j = 0; j < teams[i].length; j++) {
      teamMember += teams[i][j].name + ',';
    }
    teamMember = `<li>` + teamMember.slice(0, teamMember.length - 1) + `</li>`;
    document.getElementById('team-match-result').insertAdjacentHTML('beforeend', teamMember);
  }
};

const setRematch = () => {
  const rematchButton = document.getElementById('rematch-team-button');
  rematchButton.addEventListener('click', () => rematch());
};

const rematch = () => {
  document.getElementById('afterTeamMatch').innerHTML = '';
  showTeamMatch();
};

const isTeamNumberValid = (course, number) => {
  const crews = getCrewsFromLocalStorage('crew');
  const crewsOfCourse = [];
  course = courseTypeChange(course);

  for (let i = 0; i < crews.length; i++) {
    if (crews[i].course === course) {
      crewsOfCourse.push(crews[i]);
    }
  }

  const numberCrewsOfCourse = crewsOfCourse.length;
  if (number > parseInt(numberCrewsOfCourse / 2)) {
    alert('인원수가 너무 작아요');
    return false;
  }
  return true;
};
