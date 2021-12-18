import Crew from './Crew.js';

export default class Manager {
  constructor() {
    this.crews = [];
    this.index = 1;
  }

  addCrew(crew) {
    this.crews.push(new Crew(crew, this.index));
    this.index += 1;
  }
}
