import { STORAGE_KEY } from '../constants/constants.js';
import { loadDataFromLocalStorage, setDataOnLocalStorage } from '../utils/storage.js';
import Crew from './crew.js';
// import { STRING } from '../constants/constants.js';

export default class AppModel {
  constructor() {
    this.frontCrews = this.loadFrontCrews() || [];
    this.backCrews = this.loadBackCrews() || [];
  }

  loadFrontCrews() {
    return loadDataFromLocalStorage(STORAGE_KEY.FRONT_CREWS);
  }

  loadBackCrews() {
    return loadDataFromLocalStorage(STORAGE_KEY.BACK_CREWS);
  }

  addBackCrew(name, course) {
    this.backCrews.push(new Crew(name, course));

    return setDataOnLocalStorage(STORAGE_KEY.BACK_CREWS, this.backCrews);
  }

  addFrontCrew(name, course) {
    this.frontCrews.push(new Crew(name, course));

    return setDataOnLocalStorage(STORAGE_KEY.FRONT_CREWS, this.frontCrews);
  }

  addCrew(name, course) {
    if (course === 'backend') return this.addBackCrew(name, course);

    return this.addFrontCrew(name, course);
  }

  // deleteCrew(idx) {
  //   this.crews.splice(idx - 1, 1);
  //   console.log(this.crews);
  // }

  isCrewExist(name, course) {
    if (course === 'backend') {
      return this.backCrews.some((crew) => {
        return crew.name === name;
      });
    }

    return this.frontCrews.some((crew) => {
      return crew.name === name;
    });
  }
}
