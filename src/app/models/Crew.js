import { COURSE, MODEL_KEYS } from '../../lib/constants.js';
import Model from './Model.js';

export const CREW_KEYS = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
};
class Crew extends Model {
  constructor(previousData) {
    super({ previousData, modelName: MODEL_KEYS.CREW });
  }

  generateDefaultValue() {
    return {
      [`${CREW_KEYS.FRONTEND}`]: [],
      [`${CREW_KEYS.BACKEND}`]: [],
    };
  }

  getFrontendCrewList() {
    return this.getDataByKey(CREW_KEYS.FRONTEND);
  }

  getBackendCrewList() {
    return this.getDataByKey(CREW_KEYS.BACKEND);
  }

  setFrontendCrew(newCrewList) {
    this.setDataByKey([CREW_KEYS.FRONTEND], newCrewList);
  }

  setBackendCrew(newCrewList) {
    this.setDataByKey([CREW_KEYS.BACKEND], newCrewList);
  }

  addFrontendCrew(newCrew) {
    const crewList = this.getFrontendCrewList();
    this.setFrontendCrew([...crewList, newCrew]);
  }

  addBackendCrew(newCrew) {
    const crewList = this.getBackendCrewList();
    this.setBackendCrew([...crewList, newCrew]);
  }

  deleteCrew(courseName, position) {
    if (courseName === COURSE.FRONTEND) {
      const crewList = this.getFrontendCrewList();
      console.log(crewList.filter((_, index) => index !== position));
      this.setFrontendCrew(crewList.filter((_, index) => index !== position));
    }
    if (courseName === COURSE.BACKEND) {
      const crewList = this.getBackendCrewList();
      this.setBackendCrew(crewList.filter((_, index) => index !== position));
    }
  }
}
export default Crew;
