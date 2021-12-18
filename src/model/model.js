import { KEY } from '../constants/constants.js';

export default class TeamModel {
  constructor(dataObj) {
    this._teamObj = dataObj;
  }

  get teamObj() {
    return this._teamObj ?? {};
  }

  addNewCrew(crewName, courseName) {
    this._teamObj[courseName]['crew'].push(crewName);
  }

  setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  loadAllDataFromLocalStorage() {
    this._teamObj = this.getLocalStorage(KEY.localKey) ?? this._teamObj;
  }
}
