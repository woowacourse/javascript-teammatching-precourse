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

  deleteCrew(type, name) {
    console.log(type);
    if (type === "frontend") {
      this.frontCrew.forEach((crew, idx) => {
        console.log(crew, name);
        if (crew === name) {
          console.log(this.frontCrew);
          this.frontCrew.splice(idx, 1);
          console.log(this.frontCrew);
        }
      });

      return;
    }
    this.backCrew.forEach((crew, idx) => {
      if (crew === name) {
        this.backCrew.splice(idx, 1);
      }
    });
  }
}
