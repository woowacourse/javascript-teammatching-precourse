import { DIR } from '../constants/constants.js';

export default class TeamModel {
  constructor(dataObj) {
    this._teamObj = dataObj;
  }

  get teamObj() {
    return this._teamObj ?? {};
  }

  addNewCrew(crewName, courseName) {
    this._teamObj[courseName] = {};
    this._[DIR.crew] = [];
  }
}
