export default class CrewManageModel {
  constructor() {
    this.frontendCrews = [];
    this.backendCrews = [];
  }

  getCrewsById = (id) => {
    if (id === "frontend") {
      return this.frontendCrews;
    } else if (id === "backend") {
      return this.backendCrews;
    }
  };

  addCrew = (id, name) => {
    if (id === "frontend") {
      this.frontendCrews.push(name);
    } else if (id === "backend") {
      this.backendCrews.push(name);
    }
  };
}
