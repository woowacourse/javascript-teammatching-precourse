import Store from '../core/Store.js';
import { isExistedName, removeCrew } from '../utils/helpers/crew.js';
import { REDCUER_RESULT, ERROR_MESSAGES } from '../utils/constants.js';
import { CREW_ACTION_TYPE } from '../actions/crew.js';
import { CrewStorage } from '../storages/index.js';

const initialState = {
  frontend: [],
  backend: [],
};

class CrewStore extends Store {
  setUpReducer() {
    this.reducer = {
      [CREW_ACTION_TYPE.ADD_CREW]: ({ course, name }) =>
        this.addCrew(course, name),
      [CREW_ACTION_TYPE.REMOVE_CREW]: ({ course, name }) =>
        this.removeCrew(course, name),
    };
  }

  addCrew(course, name) {
    const crewList = this.state[course];
    if (isExistedName(name, crewList))
      return REDCUER_RESULT.FAIL(ERROR_MESSAGES.EXISTED_NAME);
    this.setState({ [course]: [...crewList, name] });
    return REDCUER_RESULT.SUCCESS();
  }

  removeCrew(course, name) {
    const updatedCrewList = removeCrew(name, this.state[course]);
    this.setState({ [course]: updatedCrewList });
    return REDCUER_RESULT.SUCCESS();
  }
}

export default new CrewStore(initialState, CrewStorage);
