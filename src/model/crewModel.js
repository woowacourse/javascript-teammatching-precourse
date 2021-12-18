export default class CrewModel {
  constructor() {
    this.frontCrew = [];
    this.backCrew = [];
  }

  addCrew(type, name) {
    if (type === "frontend") {
      if (!this.frontCrew.includes(name)) {
        this.frontCrew.push(name);
        return;
      }
      alert("동명 이인이 있습니다.");
      return;
    }
    if (!this.backCrew.includes(name)) {
      this.backCrew.push(name);
      return;
    }
    alert("동명 이인이 있습니다.");
  }
}
