import Store from '../core/Store.js';
import { TEAM_ACTION_TYPE } from '../actions/team.js';
import { TeamStorage } from '../storages/index.js';

const initialState = {
  frontend: {
    baseball: [],
    racingcar: [],
    lotto: [],
    'shopping-cart': [],
    payments: [],
    subway: [],
    performance: [],
    deploy: [],
  },
  backend: {
    baseball: [],
    racingcar: [],
    lotto: [],
    'shopping-cart': [],
    payments: [],
    subway: [],
    performance: [],
    deploy: [],
  },
};

class TeamStore extends Store {
  setUpReducer() {
    this.reducer = {
      [TEAM_ACTION_TYPE.MATCH_TEAM]: ({ course, mission }) =>
        this.matchTeam(course, mission),
      [TEAM_ACTION_TYPE.UNMATCH_TEAM]: ({ course, mission }) =>
        this.unMatchTeam(course, mission),
    };
  }

  matchTeam(course, mission) {}

  unMatchTeam(course, mission) {}
}

export default new TeamStore(initialState, TeamStorage);
