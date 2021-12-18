export default class Crew {
  constructor(crewList) {
    this._crewList = [...crewList];
    this._course = '';
  }

  setCourse(course) {
    this._course = course;
    return this;
  }

  add(crewName) {
    this._crewList.push({ name: crewName, course: this._course });
    return this;
  }

  remove(name) {
    this._crewList.forEach(({ name: crewName, course: crewCourse }, index) => {
      if (name !== crewName || crewCourse !== this._course) return false;

      this._crewList.splice(index, 1);
    });
    return this;
  }

  get list() {
    return [...this._crewList];
  }

  get filterList() {
    return this._crewList.filter(({ course }) => course === this._course);
  }
}
