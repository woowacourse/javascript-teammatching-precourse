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
}
