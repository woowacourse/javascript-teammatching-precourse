class Model {
  constructor() {
    this.index = 1;
  }
  addCrew(name) {
    const newCrew = new Crew(this.index, name);
  }
}
