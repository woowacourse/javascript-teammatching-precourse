export default class Model {
  constructor() {
    this.front = JSON.parse(localStorage.getItem("front")) || [];
    this.back = JSON.parse(localStorage.getItem("back")) || [];
    this.crew = JSON.parse(localStorage.getItem("crew")) || [];
  }

  bindCrew(handler) {
    this.onChangeCrew = handler;
  }

  commitAddCrew(course) {
    if (course === "frontend") {
      localStorage.setItem("front", JSON.stringify(this.front));
      localStorage.setItem("crew", JSON.stringify(this.crew));
      this.onChangeCrew(course, this.front);
    } else {
      localStorage.setItem("back", JSON.stringify(this.back));
      localStorage.setItem("crew", JSON.stringify(this.crew));
      this.onChangeCrew(course, this.back);
    }
  }

  addCrew(name, course) {
    if (course === "frontend") {
      this.front.push(name);
      this.crew = { front: this.front, back: this.back };
      this.commitAddCrew(course);
    } else {
      this.back.push(name);
      this.crew = { front: this.front, back: this.back };
      this.commitAddCrew(course);
    }
  }
}
