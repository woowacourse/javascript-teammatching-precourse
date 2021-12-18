import Crew from './crew.js';

// import { STRING } from '../constants/constants.js';

export default class AppModel {
  constructor() {
    this.crews = [{ name: '제임스' }, { name: '심바' }];
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
