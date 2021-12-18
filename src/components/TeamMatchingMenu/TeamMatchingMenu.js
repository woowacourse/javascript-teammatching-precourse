/* global MissionUtils */

import Component from '../../core/Component.js';
import SelectCourseMission from './sections/SelectCourseMission.js';
import MatchTeam from './sections/MatchTeam.js';
import MatchResult from './sections/MatchResult.js';
import LocalStore from '../../store/LocalStore.js';
import { $ } from '../../utils/helper.js';
import divmod from '../../utils/utils.js';

export default class TeamMatchingMenu extends Component {
  setup() {
    const { crewList, teamMatchCourse, teamMatchMission, matchedTeamList } =
      LocalStore.load();

    this.state = {
      crewList,
      teamMatchCourse,
      teamMatchMission,
      matchedTeamList,
    };
  }

  template() {
    return `
      <section id='team-matching-select-course-mission'></section>
      <section id='team-matching-match-team'></section>
      <section id='team-matching-result-section'></section>
    `;
  }

  afterMounted() {
    const {
      selectCourseMission,
      matchTeam,
      rematch,
      state: { crewList, teamMatchCourse, teamMatchMission, matchedTeamList },
    } = this;

    const index = matchedTeamList.findIndex(
      (elem) =>
        elem.course === teamMatchCourse && elem.mission === teamMatchMission
    );

    new SelectCourseMission($('#team-matching-select-course-mission'), {
      teamMatchCourse,
      teamMatchMission,
      selectCourseMission: selectCourseMission.bind(this),
    });

    if (teamMatchCourse && teamMatchMission && index === -1) {
      new MatchTeam($('#team-matching-match-team'), {
        crewList,
        teamMatchCourse,
        teamMatchMission,
        matchTeam: matchTeam.bind(this),
      });
    }

    if (index > -1) {
      new MatchResult($('#team-matching-result-section'), {
        matchedTeamList: matchedTeamList[index],
        rematch: rematch.bind(this),
      });
    }
  }

  selectCourseMission(course, mission) {
    const req = { teamMatchCourse: course, teamMatchMission: mission };
    LocalStore.save(req);
    this.setState(req);
  }

  matchTeam(count) {
    const { crewList, teamMatchCourse, teamMatchMission, matchedTeamList } =
      this.state;
    const teamList = [];

    const filteredCrewList = crewList.filter(
      (crew) => crew.course === teamMatchCourse
    );

    const result = divmod(filteredCrewList.length, count);
    const indexArray = filteredCrewList.map((crew, index) => index);
    const shuffledIndex = MissionUtils.Random.shuffle(indexArray);

    let { remainder } = result;

    for (let i = 0; i < result.result; i += 1) {
      const memberNumber = count + (remainder > 0 ? 1 : 0);
      const teamIndexList = shuffledIndex.splice(0, memberNumber);
      const team = teamIndexList.map((index) => filteredCrewList[index]);

      teamList.push([...team]);
      remainder -= 1;
    }

    const matchedTeam = {
      course: teamMatchCourse,
      mission: teamMatchMission,
      teamList,
    };

    const index = matchedTeamList.findIndex(
      (elem) =>
        elem.course === teamMatchCourse && elem.mission === teamMatchMission
    );

    if (index > -1) {
      matchedTeamList[index] = {
        ...matchedTeamList[index],
        ...matchedTeam,
      };
    } else {
      matchedTeamList.push(matchedTeam);
    }

    LocalStore.save({ matchedTeamList });
    this.setState({
      matchedTeamList,
    });
  }

  rematch(course, mission) {
    const { matchedTeamList } = this.state;
    const index = matchedTeamList.findIndex(
      (elem) => elem.course === course && elem.mission === mission
    );

    matchedTeamList.splice(index, 1);

    LocalStore.save({ matchedTeamList });
    this.setState({ matchedTeamList });
  }
}
