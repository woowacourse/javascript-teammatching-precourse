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
    this.selectInfo = ['', ''];
  }

  addSelect(course, mission) {
    const select = new Select(course, mission);
    this.selectInfo[0] = select.course;
    this.selectInfo[1] = select.mission;
  }
}
