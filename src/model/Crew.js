export default class Crew {
  constructor() {
    this.crewList = [];
  }

  setCrew = (newCrew) => {
    this.crewList.append(newCrew);
  };

  getCrew = () => this.crewList;
}
