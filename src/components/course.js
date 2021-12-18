export default class Course {
  constructor() {
    this.crews = [];
  }

  add(member) {
    this.crews.push(member);
  }
}
