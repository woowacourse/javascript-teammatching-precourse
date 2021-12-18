export default class CrewManageModel {
  constructor() {
    this.frontendCrews = [];
    this.backendCrews = [];
  }

  addCrew = (id, name) => {
    if (id === "frontend") {
      this.frontendCrews.push(name);
    } else if (id === "backend") {
      this.backendCrews.push(name);
    }
  };
}
