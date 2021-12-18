import { courses } from '../data/course.js';
import { missions } from '../data/mission.js';
import { createCrewTable } from '../dom/crewManager/createCrewTable.js';
import { getCrewManager } from '../dom/domElement.js';
import { printResult } from '../dom/teamManager/printResult.js';
import { saveCrews } from '../storage/crew.js';
import { getCrewNameInput, getMemberCountInput } from '../user.js';

export default class TeamMatching {
  constructor() {
    this.courses = courses;
    this.missions = missions;
    this.crews = {
      frontend: [],
      backend: [],
    };
    this.teams = [];
  }

  addCrew(type) {
    const name = getCrewNameInput();

    if (!name) {
      return;
    }

    this.updateCrewModel('추가', type, name);
    this.updateCrewModel('저장', type, name);
    this.updateCrewView(type);
  }

  deleteCrew(crewName, type) {
    if (window.confirm(`${crewName}을(를) 삭제하시겠습니까?`)) {
      this.updateCrewModel('삭제', type, crewName);
      this.updateCrewModel('저장', type, crewName);
      this.updateCrewView(type);
    }
  }

  updateCrewModel(action, course, name) {
    switch (action) {
      case '추가':
        this.crews[course].push(name);
        break;

      case '삭제':
        this.crews[course] = this.crews[course].filter(crew => crew !== name);
        break;

      case '저장':
        saveCrews();
        break;
    }
  }

  updateCrewView(course) {
    const crewManager = getCrewManager();

    crewManager.append(createCrewTable(course));
  }

  matchingTeam(course, mission) {
    const memberCount = getMemberCountInput();

    if (!memberCount) {
      return;
    }

    this.teams = this.divideTeam(
      course,
      this.getSuffledIndexList(course),
      memberCount
    );
    printResult(course, mission);
  }

  getSuffledIndexList(course) {
    const indexList = [];

    let index = 0;
    for (index = 0; index < this.crews[course].length; index++) {
      indexList.push(index);
    }

    return MissionUtils.Random.shuffle(indexList);
  }

  divideTeam(course, suffledIndexList, memberCount) {
    const teams = [];
    const teamCount = parseInt(this.crews[course].length / memberCount);
    let selectedCount = 0;

    for (let index = 0; index < teamCount; index++) {
      teams.push([]);
    }

    while (selectedCount < suffledIndexList.length) {
      for (let _index = 0; _index < teamCount; _index++) {
        for (let i = 0; i < memberCount; i++) {
          teams[_index].push(
            this.crews[course][suffledIndexList[selectedCount++]]
          );

          if (selectedCount >= suffledIndexList.length) {
            break;
          }
        }

        if (selectedCount >= suffledIndexList.length) {
          break;
        }
      }
    }

    return teams;
  }

  // selectMember(
  //   course,
  //   teams,
  //   teamCount,
  //   memberCount,
  //   selectedCount,
  //   suffledIndexList
  // ) {
  //   for (let _index = 0; _index < teamCount; _index++) {
  //     for (let i = 0; i < memberCount; i++) {
  //       teams[_index].push(
  //         this.crews[course][suffledIndexList[selectedCount++]]
  //       );

  //       if (selectedCount >= suffledIndexList.length) {
  //         break;
  //       }
  //     }

  //     if (selectedCount >= suffledIndexList.length) {
  //       break;
  //     }
  //   }
  // }
}
