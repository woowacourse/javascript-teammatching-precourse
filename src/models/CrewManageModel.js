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
  isValidMinCrewLengthInput(count) {
    if (count === '') {
      alert('입력이 올바르지 않습니다.');
      return false;
    }
    if (parseInt(count) <= 0) {
      alert('최소 1명 이상이어야 합니다.');
      return false;
    }
    return true;
  },
  setMinCrewLength(count) {
    this.minCrewLength = count;
  },
  match(course) {
    const shuffledCrewsIndex = getShuffledCrewsIndex(this.crews[course].length);
    const teamsCount = parseInt(this.crews[course].length / this.minCrewLength);
    const teams = Array.from(Array(teamsCount), () => []);
    for (const team of teams) {
      for (let i = 0; i < this.minCrewLength; i += 1) {
        team.push(this.crews[course][shuffledCrewsIndex.shift()]);
      }
    }
    while (shuffledCrewsIndex.length) {
      teams.forEach((team) => {
        const crew = this.crews[course][shuffledCrewsIndex.shift()];
        if (crew) {
          team.push(crew);
        }
      });
    }
    return teams;
  },
};

const getShuffledCrewsIndex = (length) => {
  const crewsAsIndex = Array.from({ length }, (undefined, i) => i);
  return MissionUtils.Random.shuffle(crewsAsIndex);
};
