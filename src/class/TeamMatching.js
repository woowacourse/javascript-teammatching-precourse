import { courses } from '../data/course.js';
import { missions } from '../data/mission.js';
import { createCrewTable } from '../dom/crewManager/createCrewTable.js';
import { getCrewManager } from '../dom/domElement.js';
import { saveCrews } from '../storage/crew.js';
import { getCrewNameInput } from '../user.js';

export default class TeamMatching {
  constructor() {
    this.courses = courses;
    this.missions = missions;
    this.crews = {
      frontend: [],
      backend: [],
    };
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
    this.updateCrewModel('삭제', type, crewName);
    this.updateCrewModel('저장', type, crewName);
    this.updateCrewView(type);
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
}
