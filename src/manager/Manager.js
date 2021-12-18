import Validator from '../validator/Validator.js';
import Crew from './Crew.js';
import {
  STORAGE_KEY,
  TEAM_INPUT_ID,
} from '../constant/constant.js';
import $ from '../util/$.js';

function getCrewsFromStorage() {
  const copy = JSON.parse(localStorage.getItem(STORAGE_KEY.CREWS));

  return copy?.map((crew) => new Crew(crew, crew.index));
}

export default class Manager {
  constructor() {
    this.crews = getCrewsFromStorage() || [];
    this.index = JSON.parse(localStorage.getItem(STORAGE_KEY.INDEX)) || 1;
  }

  addCrew(crew) {
    if (Validator.IsValidCrewAdd(crew.name, this.crews)) {
      const newCrew = this.crews.push(new Crew(crew, this.index));
      this.index += 1;
      localStorage.setItem(STORAGE_KEY.CREWS, JSON.stringify(this.crews));
      localStorage.setItem(STORAGE_KEY.INDEX, this.index);
      return this.crews[newCrew - 1];
    }
    return null;
  }

  deleteCrew($nodeToDelete, crewToDelete) {
    const index = this.crews.findIndex((crew) => crew.index === +crewToDelete.index);

    this.renderUpdate($nodeToDelete);
    this.crews.splice(index, 1);
    localStorage.setItem(STORAGE_KEY.CREWS, JSON.stringify(this.crews));
  }

  getCourseCrews(course) {
    return this.crews.filter((crew) => crew.course === course);
  }

  findCrewByIndex(index) {
    return this.crews.find((crew) => crew.index === index);
  }

  getCrewsByIndex(indexes) {
    const crews = [];

    indexes.forEach((index) => {
      crews.push(this.findCrewByIndex(index));
    });
    return crews;
  }

  getRandomCrews(number, crews) {
    const result = [];
    let count = 0;

    while (crews.length >= number) {
      const team = [];
      count = 0;
      while (count < number) {
        team.push(crews.shift());
        count += 1;
      }
      result.push(team);
    }
    return result;
  }

  getTeamTemplate(team) {
    const names = team.map((crew) => crew.name);
    const result = names.join(',');
    return `<li>${result}</li>`;
  }

  renderResult(newTeam) {
    const $ul = $(`#${TEAM_INPUT_ID.MATCH_RESULT}`);
    let template = '';
    newTeam.map((team) => {
      template += this.getTeamTemplate(team);
    });
    $ul.innerHTML = template;
  }

  putRemain(crews, newTeam) {
    newTeam.forEach((team) => {
      team.push(crews.shift());
    });
  }

  matchTeam({ course, mission }, number) {
    const crews = this.getCourseCrews(course);
    const indexes = crews.map((crew) => crew.index);
    const randomIndex = window.MissionUtils.Random.shuffle(indexes);
    const randomCrews = this.getCrewsByIndex(randomIndex);
    const newTeam = this.getRandomCrews(number, randomCrews);
    if (randomCrews.length !== 0) {
      this.putRemain(randomCrews, newTeam);
    }
    this.renderResult(newTeam);
  }

  renderUpdate($nodeToDelete) {
    const $copy = $nodeToDelete;

    $copy.remove();
  }
}
