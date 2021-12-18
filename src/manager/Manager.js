import Validator from '../validator/Validator.js';
import Crew from './Crew.js';

export default class Manager {
  constructor() {
    this.crews = [];
    this.index = 1;
  }

  addCrew(crew) {
    if (Validator.IsValidCrewAdd(crew.name, this.crews)) {
      this.crews.push(new Crew(crew, this.index));
      this.index += 1;
      return true;
    }
    return false;
  }
}
