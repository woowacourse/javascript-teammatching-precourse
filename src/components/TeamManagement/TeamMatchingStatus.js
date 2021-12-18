import Component from '../../core/Component.js';
import TeamStore from '../../stores/TeamStore.js';
import CrewStore from '../../stores/CrewStore.js';
import { matchTeamAction, unmatchTeamAction } from '../../actions/team.js';
import { $ } from '../../utils/dom.js';
import { isValidHeadCount } from '../../utils/validation.js';
import { parseNumber } from '../../utils/input.js';
import {
  COURSE_NAME,
  EVENT_TYPE,
  ERROR_MESSAGES,
  MISSION_NAME,
} from '../../utils/constants.js';
import { matchTeamForm, matchedTeams } from '../../templates/teamManagement.js';

export default class TeamStatus extends Component {
  getGlobalState() {
    return { teamList: TeamStore.getState(), crewList: CrewStore.getState() };
  }

  bindEvents() {
    this.appendRootEvents(EVENT_TYPE.SUBMIT, () => this.onSubmitMatchTeam());
    this.appendRootEvents(EVENT_TYPE.CLICK, event =>
      this.onClickRematchButton(event)
    );
  }

  onSubmitMatchTeam() {
    const { course, mission } = this.props;
    const headCount = parseNumber($('#team-member-count-input').value);
    const crewCount = this.getGlobalState().crewList[course].length;

    if (!isValidHeadCount(headCount, crewCount))
      return alert(ERROR_MESSAGES.TEAM_HEADCOUNT);
    return TeamStore.dispatch(matchTeamAction({ course, mission, headCount }));
  }

  onClickRematchButton({ target }) {
    if (target.id !== 'rematch-team-button') return;
    const { course, mission } = this.props;
    return TeamStore.dispatch(unmatchTeamAction({ course, mission }));
  }

  render() {
    const { course, mission } = this.props;
    if (!course || !mission) return;
    const { teamList, crewList } = this.getGlobalState();

    const selectedTeam = teamList[course][mission];
    const selectedCrew = crewList[course];

    this.$container.innerHTML = selectedTeam.length
      ? `
       <h3> ${COURSE_NAME[course]} ${MISSION_NAME[mission]} 조회</h3>
        ${matchedTeams(selectedTeam)}`
      : `<h3>${COURSE_NAME[course]} ${MISSION_NAME[mission]} 미션의 팀 매칭</h3>
       ${matchTeamForm(selectedCrew)}`;
  }
}
