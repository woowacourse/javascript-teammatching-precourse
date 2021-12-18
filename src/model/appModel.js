import Crew from './crew.js';

// import { STRING } from '../constants/constants.js';

export default class AppModel {
  constructor() {
    this.crews = [];
  }

  addCrew(name) {
    this.crews.push(new Crew(name));
  }

  isCrewExist(name) {
    return this.crews.some((crew) => {
      return crew.name === name;
    });
  }
}
