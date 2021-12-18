import { USER_INPUT_ALERT } from '../utils/constant.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage.js';

export class MatchingModel {
  frontEndCrewList = getLocalStorage('frontEndCrewList', []);
  backEndCrewList = getLocalStorage('backEndCrewList', []);

  addCrewList(crewName, course) {
    if (course === 'frontend') {
      if (this.isSameName(this.frontEndCrewList, crewName)) {
        return;
      }
      this.frontEndCrewList.push(crewName);
      setLocalStorage('frontEndCrewList', this.frontEndCrewList);
      return this.frontEndCrewList;
    }
    if (this.isSameName(this.backEndCrewList, crewName)) {
      return;
    }
    this.backEndCrewList.push(crewName);
    setLocalStorage('backEndCrewList', this.backEndCrewList);
    return this.backEndCrewList;
  }

  isSameName(crewList, crewName) {
    if (crewList.includes(crewName)) {
      alert(USER_INPUT_ALERT.sameNameError);
      return true;
    }
  }

  deleteCrewList(crewName, course) {
    if (course === 'frontend') {
      const index = this.frontEndCrewList.indexOf(crewName);
      this.frontEndCrewList.splice(index, 1);
      setLocalStorage('frontEndCrewList', this.frontEndCrewList);
      return this.frontEndCrewList;
    }
    const index = this.backEndCrewList.indexOf(crewName);
    this.backEndCrewList.splice(index, 1);
    setLocalStorage('backEndCrewList', this.backEndCrewList);
    return this.backEndCrewList;
  }
}
