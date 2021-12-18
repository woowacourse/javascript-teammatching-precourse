import { MODEL_KEYS } from '../../lib/constants.js';
import store from '../../lib/store.js';
import Crew from './Crew.js';
import Global from './Global.js';
import Inputs from './Inputs.js';
import Team from './Team.js';

class TeamMatchingModel {
  constructor() {
    this.$global = new Global(store.getLocalStorage(MODEL_KEYS.GLOBAL));
    this.$inputs = new Inputs(store.getLocalStorage(MODEL_KEYS.INPUTS));
    this.$crew = new Crew(store.getLocalStorage(MODEL_KEYS.CREW));
    this.$team = new Team(store.getLocalStorage(MODEL_KEYS.TEAM));
  }

  getGlobalModel() {
    return this.$global;
  }

  getInputsModel() {
    return this.$inputs;
  }

  getCrewModel() {
    return this.$crew;
  }

  getTeamModel() {
    return this.$team;
  }
}
export default TeamMatchingModel;
