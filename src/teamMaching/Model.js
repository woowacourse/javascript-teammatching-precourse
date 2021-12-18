class Select {
  constructor(course, mission) {
    this.course = course;
    this.mission = mission;
  }
}

export default class Model {
  constructor() {
    this.FrontPeopleList = [];
    this.BackPeopleList = [];
  }

  addSelect(course, mission) {
    const select = new Select(course, mission);
  }
}
