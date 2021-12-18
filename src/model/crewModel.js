import {
  getBackCrew,
  setBackCrew,
  getFrontCrew,
  setFrontCrew,
} from "../storage/localStorage.js";

export default class CrewModel {
  constructor() {
    this.frontCrew = getFrontCrew();
    this.backCrew = getBackCrew();
  }

  addCrew(type, name) {
    if (type === "frontend") {
      if (!this.frontCrew.includes(name)) {
        this.frontCrew.push(name);
        this.frontCrew = setFrontCrew(this.frontCrew);
        return;
      }
      alert("동명 이인이 있습니다.");
      return;
    }
    if (!this.backCrew.includes(name)) {
      this.backCrew.push(name);
      this.backCrew = setBackCrew(this.backCrew);
      return;
    }
    alert("동명 이인이 있습니다.");
  }

  deleteCrew(type, name) {
    if (type === "frontend") {
      this.frontCrew.forEach((crew, idx) => {
        if (crew === name) {
          this.frontCrew.splice(idx, 1);
        }
      });
      this.frontCrew = setFrontCrew(this.frontCrew);
      return;
    }
    this.backCrew.forEach((crew, idx) => {
      if (crew === name) {
        this.backCrew.splice(idx, 1);
      }
    });
    this.backCrew = setBackCrew(this.backCrew);
  }
}
