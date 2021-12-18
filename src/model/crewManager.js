export default class CrewManager {
  constructor(crew) {
    this.crew = crew
  }

  add(course, name) {
    this.crew[course].push(name);
  }

  delete(course, name) {
    const index = this.crew[course].indexOf(name);
    this.crew[course].splice(index, 1);
  }
}
