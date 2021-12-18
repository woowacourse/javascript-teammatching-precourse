import TeamMatchingView from '../view/TeamMatchingManage.js';
import CrewManageModel from '../model/CrewManage.js';
import { $ } from '../utils/dom.js';
import { changeMissionNameToKorean, suffleCrewMemberTeam } from '../utils/index.js';

import {
  SELECTOR,
  FRONT_END,
  BACK_END,
  FRONT_END_COURSE,
  BACK_END_COURSE,
  OPTION,
} from '../constants.js';

class TeamMatchingManageController {
  constructor() {
    this.$teamMatchinManageView = new TeamMatchingView();
    this.$crewManageModel = new CrewManageModel();

    this.initEventListeners();
  }

  initEventListeners() {
    $(`#${SELECTOR.tabContentMain}`).addEventListener(
      'click',
      this.onClickTeamMatchingManageContent.bind(this),
    );
  }

  onClickTeamMatchingManageContent(event) {
    const { id } = event.target;

    if (id === SELECTOR.showTeamMatcherButtonId) {
      this.onClickTeamMatcherButton(event);
    } else if (id === SELECTOR.matchTeamButtonId) {
      this.onCLickMatchTeamButton(event);
    }
  }

  onClickTeamMatcherButton(event) {
    event.preventDefault();

    const courseName = $(`#${SELECTOR.courseSelectId}`).value;
    const missionName = changeMissionNameToKorean($(`#${SELECTOR.missionSelectId}`).value);

    if (courseName === OPTION.frontend) {
      this.$teamMatchinManageView.renderTeamMemberCountForm(
        FRONT_END,
        missionName,
        this.$crewManageModel.getFrontEndMember(),
      );
    } else if (courseName === OPTION.backend) {
      this.$teamMatchinManageView.renderTeamMemberCountForm(
        BACK_END,
        missionName,
        this.$crewManageModel.getBackEndMember(),
      );
    }
  }

  onCLickMatchTeamButton(event) {
    event.preventDefault();

    const memberTeamCount = $(`#${SELECTOR.teamMemberCountInputId}`).value;
    const courseName = $(`#${SELECTOR.courseSelectId}`).value;
    const missionName = changeMissionNameToKorean($(`#${SELECTOR.missionSelectId}`).value);

    if (courseName === OPTION.frontend) {
      const memberCount = this.$crewManageModel.getFrontEndMember().length;
      const memberIndexArray = this.suffleMemberIndex(memberCount);
      const suffleMemberIndexArray = suffleCrewMemberTeam(memberIndexArray);
      const teamArray = this.matchingTeamMemberWithSuffle(
        this.$crewManageModel.getFrontEndMember(),
        suffleMemberIndexArray,
        Number(memberTeamCount),
      );
      this.$teamMatchinManageView.renderTeamMatchingResult(FRONT_END, missionName, teamArray);
    }
  }

  suffleMemberIndex(memberCount) {
    const memberIndexArray = [];
    for (let i = 0; i < memberCount; i += 1) {
      memberIndexArray.push(i + 1);
    }
    return memberIndexArray;
  }

  matchingTeamMemberWithSuffle(crewMembers, suffleMemberIndexArray, memberTeamCount) {
    const teamCount = Math.floor(crewMembers.length / memberTeamCount);
    let memberCount = 0;
    const team = [];
    for (let i = 0; i < teamCount; i += 1) {
      const oneTeam = [];
      for (let j = 0; j < memberTeamCount; j += 1) {
        oneTeam.push(crewMembers[suffleMemberIndexArray[memberCount]]);
        memberCount += 1;
      }
      team.push(oneTeam);
    }

    return team;
  }

  // matchingTeamMemberWithSuffle(suffleMemberIndexArray, memberTeamCount) {
  //   let arrayLength = suffleMemberIndexArray.length;
  //   let count = 0;
  //   const teamArray = [];

  //   console.log(arrayLength, memberTeamCount);
  //   while (arrayLength % memberTeamCount !== 0 && arrayLength > 0) {
  //     const temp = [];
  //     for (let i = count * memberTeamCount; i < memberTeamCount + 1; i += 1) {
  //       temp.push(suffleMemberIndexArray[i]);
  //     }
  //     arrayLength -= memberTeamCount + 1;
  //     count += 1;
  //     teamArray.push(temp);
  //   }

  //   while (arrayLength > 0) {
  //     const temp = [];
  //     for (let i = count * memberTeamCount; i < suffleMemberIndexArray.length; i += 1) {
  //       temp.push(suffleMemberIndexArray[i]);
  //     }
  //     arrayLength -= memberTeamCount;
  //     count += 1;
  //     teamArray.push(temp);
  //   }

  //   return teamArray;
  // }
}

export default TeamMatchingManageController;
