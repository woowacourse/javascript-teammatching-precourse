import { STORAGE_KEY } from '../constants/constants.js';
import { loadDataFromLocalStorage, setDataOnLocalStorage } from '../utils/storage.js';
import Crew from './crew.js';
// import { STRING } from '../constants/constants.js';

export default class AppModel {
  constructor() {
    this.crews = this.loadCrews() || [];
  }

  loadCrews() {
    return loadDataFromLocalStorage(STORAGE_KEY.CREWS);
  }

  addCrew(name) {
    this.crews.push(new Crew(name));

    setDataOnLocalStorage(STORAGE_KEY.CREWS, this.crews);
  }

  isCrewExist(name) {
    return this.crews.some((crew) => {
      return crew.name === name;
    });
  }
}
