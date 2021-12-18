import Component from '../core/Component.js';
import MatchTypeSelect from './team/MatchTypeSelect.js';
import TeamMatcher from './team/TeamMatcher.js';
import TeamMatchResult from './team/TeamMatchResult.js';

export default class TeamTab extends Component {
  htmlTemplate() {
    return `
    <section class="component" data-component="match-type-select"></section>
    <section class="component hide" data-component="team-matcher"></section>
    <section class="component hide" data-component="team-match-result"></section>
    `;
  }

  mounted() {
    this.addMount('match-type-select', MatchTypeSelect);
    this.addMount('team-matcher', TeamMatcher);
    this.addMount('team-match-result', TeamMatchResult);
  }
}
