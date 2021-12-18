import { checkValidName } from "../utils/validator";

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
    checkValidName(this.getCrewsById(id), name);

    if (id === "frontend") {
      this.frontendCrews.push(name);
    } else if (id === "backend") {
      this.backendCrews.push(name);
    }
  };
}
