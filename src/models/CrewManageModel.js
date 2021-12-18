import CourseModel from './CourseModel.js';
const initCrews = () => {
  return JSON.parse(localStorage.getItem('crews'))
    ? JSON.parse(localStorage.getItem('crews'))
    : { frontend: [], backend: [] };
};

export default {
  crews: initCrews(),
  minCrewLength: 0,
  add(newCrew) {
    if (newCrew.name.length > 5) {
      alert('크루 이름은 최대 5글자만 가능합니다.');
      return;
    }
    if (this.crews[newCrew.course].findIndex((crew) => crew === newCrew.name) !== -1) {
      alert('이미 추가된 크루입니다.');
      return;
    }
    this.crews[newCrew.course].push(newCrew.name);
    this.setCrews();
  },
  list() {
    return this.crews;
  },
  delete(deleteCrew) {
    this.crews[deleteCrew.course] = this.crews[deleteCrew.course].filter(
      (crew) => crew !== deleteCrew.name,
    );
    this.setCrews();
  },
  setCrews() {
    localStorage.setItem('crews', JSON.stringify(this.crews));
  },
  setMinCrewLength(count) {
    this.minCrewLength = count;
  },
  match(course) {
    const shuffledCrewsIndex = getShuffledCrewsIndex(this.crews[course].length);
    const teamsCount = parseInt(this.crews[course].length / this.minCrewLength);
    const teams = Array.from(Array(teamsCount), () => []);
    while (shuffledCrewsIndex.length) {
      teams.forEach((team) => team.push(this.crews[course][shuffledCrewsIndex.shift()]));
    }
    return teams;
  },
};

const getShuffledCrewsIndex = (length) => {
  const crewsAsIndex = Array.from({ length }, (undefined, i) => i);
  return MissionUtils.Random.shuffle(crewsAsIndex);
};
