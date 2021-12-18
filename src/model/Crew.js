import { NUMBER } from '../utils/constant.js';

export default class Crew {
  constructor() {
    this.crewList = [];
    this.crewIndex = 1;
    this.lastCrew = '';
  }

  removeCrew = (targetCrew) => {
    console.log(targetCrew);
  };

  setCrew = (newCrew) => {
    this.crewList.push([this.crewIndex, newCrew]);
    this.lastCrew = newCrew;
    this.crewIndex += NUMBER.ONE;
  };

  getCrewList = () => this.crewList;

  getLastCrew = () => this.lastCrew;

  getLastCrewIndex = () => this.crewIndex - NUMBER.ONE;
}
