import { USER_INPUT_ALERT } from '../utils/constant.js';

export class MatchingModel {
  frontEndCrewList = [
    '김의진',
    '오정은',
    '히히히',
    '하하하',
    '호호호',
    '헤헤헤',
    '휴휴휴',
    '뉴뉴뉴',
  ];
  backEndCrewList = ['1', '2', '3', '4', '5', '6', '7', '8'];

  addCrewList(crewName, course) {
    if (course === 'frontend') {
      if (this.isSameName(this.frontEndCrewList, crewName)) {
        return;
      }
      console.log(`1`);
      this.frontEndCrewList.push(crewName);
      return this.frontEndCrewList;
    }
    if (this.isSameName(this.backEndCrewList, crewName)) {
      return;
    }
    this.backEndCrewList.push(crewName);
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
      return this.frontEndCrewList;
    }
    const index = this.backEndCrewList.indexOf(crewName);
    this.backEndCrewList.splice(index, 1);
    return this.backEndCrewList;
  }
}
