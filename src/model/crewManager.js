export default class CrewManager {
  constructor() {
    this.crew = {
      frontend: [],
      backend: [],
    };
  }

  add(course, name) {
    this.crew[course].push(name);
  }

  delete(course, name) {
    const index = this.crew[course].indexOf(name);
    this.crew[course].splice(index, 1);
  }
}
