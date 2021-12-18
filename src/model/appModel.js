// import { STRING } from '../constants/constants.js';

export default class AppModel {
  constructor() {
    this.crews = [];
  }

  isCrewExist(name) {
    return this.crews.some((crew) => {
      return crew.name === name;
    });
  }
}
