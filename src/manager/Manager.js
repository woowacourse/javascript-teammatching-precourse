import Validator from '../validator/Validator.js';
import Crew from './Crew.js';
import {
  STORAGE_KEY,
} from '../constant/constant.js';

export default class Manager {
  constructor() {
    this.crews = JSON.parse(localStorage.getItem(STORAGE_KEY.CREWS)) || [];
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

  renderUpdate($nodeToDelete) {
    const $copy = $nodeToDelete;

    $copy.remove();
  }
}
