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
    this.crewIndex += 1;
  };

  getCrewList = () => this.crewList;

  getLastCrew = () => this.lastCrew;

  getLastCrewIndex = () => this.crewIndex - 1;
}
