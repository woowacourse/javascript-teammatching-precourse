export default class CrewManager {
  constructor() {
    this.frontend = [];
    this.backend = [];
  }

  add(crew) {
    if (crew.course === 'frontend') {
      this.frontend.push(crew);
    }

    if (crew.course === 'backend') {
      this.backend.push(crew);
    }
  }

  isExistName(name) {
    for (let i = 0; i < this.frontend.length; i++) {
      if (name === this.frontend[i].name) {
        return true;
      }
    }

    for (let i = 0; i < this.backend.length; i++) {
      if (name === this.backend[i].name) {
        return true;
      }
    }

    return false;
  }

  getCrewList(course) {
    return this[course].map((crew) => crew.name);
  }

  deleteCrew(course, index) {
    this[course].splice(index, 1);
  }
}
