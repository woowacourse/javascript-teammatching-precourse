import Store from '../core/Store.js';
import CrewStore from './CrewStore.js';
import { TEAM_ACTION_TYPE } from '../actions/team.js';
import { TeamStorage } from '../storages/index.js';
import { matchRandomTeam } from '../utils/helpers/team.js';

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
      [TEAM_ACTION_TYPE.MATCH_TEAM]: ({ course, mission, headCount }) =>
        this.matchTeam(course, mission, headCount),
      [TEAM_ACTION_TYPE.UNMATCH_TEAM]: ({ course, mission }) =>
        this.unMatchTeam(course, mission),
    };
  }

  matchTeam(course, mission, headCount) {
    const crew = CrewStore.getState()[course];
    const matchedTeamList = matchRandomTeam(crew, headCount);
    this.setState({
      frontend: { ...this.state.frontend, [mission]: matchedTeamList },
    });
  }

  unMatchTeam(course, mission) {}
}

export default new TeamStore(initialState, TeamStorage);
