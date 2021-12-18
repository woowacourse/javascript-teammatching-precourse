import { getLocalStorage, setLocalStorage } from "../utils/localStorage.js";
import { checkValidName } from "../utils/validator.js";

export default class CrewManageModel {
  constructor() {
    this.frontendCrews = getLocalStorage("frontend") ?? [];
    this.backendCrews = getLocalStorage("backend") ?? [];
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
    setLocalStorage(id, this.getCrewsById(id));
  };

  deleteCrew = (id, name) => {
    const idx = this.findIndexByName(id, name);
    const crews = this.getCrewsById(id);
    crews.splice(idx, 1);
    setLocalStorage(id, this.getCrewsById(id));
  };

  findIndexByName = (id, name) => {
    return this.getCrewsById(id).findIndex((crew) => crew === name);
  };
}
