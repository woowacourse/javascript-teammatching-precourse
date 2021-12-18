import { COURSE_KEY } from "../utils/constant.js";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage.js";
import { checkValidName } from "../utils/validator.js";

export default class CrewManageModel {
  constructor() {
    this.frontendCrews = getLocalStorage(COURSE_KEY.FRONTEND) ?? [];
    this.backendCrews = getLocalStorage(COURSE_KEY.BACKEND) ?? [];
  }

  getCrewsById = (id) => {
    if (id === COURSE_KEY.FRONTEND) {
      return this.frontendCrews;
    } else if (id === COURSE_KEY.BACKEND) {
      return this.backendCrews;
    }
  };

  addCrew = (id, name) => {
    checkValidName(this.getCrewsById(id), name);

    if (id === COURSE_KEY.FRONTEND) {
      this.frontendCrews.push(name);
    } else if (id === COURSE_KEY.BACKEND) {
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
