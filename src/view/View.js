import { ID } from '../utils/constants.js';
import { $id } from '../utils/dom.js';
import {
  CREW_COURSE_TEMPLATE,
  CREW_MANAGE_TEMPLATE,
  TAB_MENUS_TEMPLATE,
  TEAM_MATCHING_MANAGE_TEMPLATE,
} from '../utils/template/index.js';

class View {
  constructor() {
    this.init();
  }

  init() {
    this.$app = document.getElementById(ID.APP);

    this.showTabMenuScreen();
    this.$content = document.getElementById(ID.CONTENT);
  }

  showTabMenuScreen() {
    this.$app.innerHTML = TAB_MENUS_TEMPLATE;
  }

  showCrewCourseScreen() {
    this.$content.innerHTML = CREW_COURSE_TEMPLATE;
  }

  showCrewManageScreen(crewList, course) {
    $id(ID.CREW_MANAGE_SECTION).innerHTML = CREW_MANAGE_TEMPLATE(crewList, course);
  }

  showTeamManageScreen() {
    this.$content.innerHTML = TEAM_MATCHING_MANAGE_TEMPLATE;
  }

  initScreen() {
    this.$content.innerHTML = '';
  }
}

export default View;
