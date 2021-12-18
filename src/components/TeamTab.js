import Component from '../core/Component.js';
import MatchTypeSelect from './team/MatchTypeSelect.js';
import TeamMatcher from './team/TeamMatcher.js';
import TeamMatchResult from './team/TeamMatchResult.js';

import { storageManager } from '../utils/data-tools.js';
import TeamMatch from '../models/TeamMatch.js';
import { CONSTANTS } from '../constants/constants.js';

import { $teamList } from './StateList.js';

export default class TeamTab extends Component {
  init() {
    const teamList = storageManager.get(CONSTANTS.STORAGE_KEY_TEAM, {
      frontend: {},
      backend: {},
    });

    this._teamManager = new TeamMatch(teamList);
    this._crewList = [];
  }

  htmlTemplate() {
    return `
    <section class="component" data-component="match-type-select"></section>
    <section class="component hide" data-component="team-matcher"></section>
    <section class="component hide" data-component="team-match-result"></section>
    `;
  }

  mounted() {
    this.addMount('match-type-select', MatchTypeSelect, {
      state: $teamList,
      teamManager: this._teamManager,
      crewList: this._crewList,
    });
    this.addMount('team-matcher', TeamMatcher);
    this.addMount('team-match-result', TeamMatchResult);
  }
}
