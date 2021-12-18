import { storageManager } from '../utils/data-tools.js';
import Crew from '../models/Crew.js';
import { $crewList } from './StateList.js';
import { CONSTANTS } from '../constants/constants.js';

import Component from '../core/Component.js';
import CourseSelect from './crew/CourseSelect.js';
import CrewNameInput from './crew/CrewNameInput.js';
import CrewList from './crew/CrewList.js';

export default class CrewTab extends Component {
  init() {
    const crewList = storageManager.get(CONSTANTS.STORAGE_KEY_CREW, []);
    this._crewManager = new Crew(crewList);
  }

  htmlTemplate() {
    return `
    <section class="component" data-component="course-select"></section>
    <section class="component hide" data-component="crew-name-input"></section>
    <section class="component hide" data-component="crew-list"></section>
    `;
  }

  mounted() {
    this.addMount('course-select', CourseSelect, {
      state: $crewList,
      crewManager: this._crewManager,
    });
    this.addMount('crew-name-input', CrewNameInput, {
      state: $crewList,
      crewManager: this._crewManager,
    });
    this.addMount('crew-list', CrewList, {
      state: $crewList,
      crewManager: this._crewManager,
    });
  }
}
