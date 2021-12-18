import Component from '../../core/Component.js';
import TeamStore from '../../stores/TeamStore.js';
import CrewStore from '../../stores/CrewStore.js';
import { COURSE_NAME, EVENT_TYPE } from '../../utils/constants.js';
import { matchTeamForm, matchedTeams } from '../../templates/teamManagement.js';

export default class TeamStatus extends Component {
  getGlobalState() {
    return { teamList: TeamStore.getState(), crewList: CrewStore.getState() };
  }

  bindEvents() {
    this.appendRootEvents(EVENT_TYPE.SUBMIT, () => this.onSubmitMatchTeam());
  }

  onSubmitMatchTeam() {}

  render() {
    const { course, mission } = this.props;
    if (!course || !mission) return;
    const { teamList, crewList } = this.getGlobalState();

    const selectedTeam = teamList[course][mission];
    const selectedCrew = crewList[course];

    this.$container.innerHTML = selectedTeam.length
      ? `
      <h3> ${COURSE_NAME[course]} ${mission} 조회</h3>
        ${matchedTeams(selectedTeam)}`
      : `<h3>${
          COURSE_NAME[course]
        } ${mission} 미션의 팀 매칭</h3> ${matchTeamForm(selectedCrew)}`;
  }
}
