import {
  CUSTOM_EVENT_NAME,
  EVENT_LISTENER_TYPE,
  SELECTOR,
} from '../constants.js';
import { on, qs } from '../utils/index.js';
import View from './View.js';

export default class TabView extends View {
  constructor(element = qs(`#${SELECTOR.TAB_BUTTONS}`)) {
    super(element);

    this.crewTab = qs(`#${SELECTOR.CREW_TAB}`);
    this.teamTab = qs(`#${SELECTOR.TEAM_TAB}`);

    this.bindEvents();
  }

  bindEvents() {
    on(this.crewTab, EVENT_LISTENER_TYPE.CLICK, () =>
      this.handleCrewTab(),
    );
    on(this.teamTab, EVENT_LISTENER_TYPE.CLICK, () =>
      this.handleTeamTab(),
    );
  }

  handleCrewTab() {
    this.emit(CUSTOM_EVENT_NAME.SHOW_CREW_TAB);
  }

  handleTeamTab() {
    this.emit(CUSTOM_EVENT_NAME.SHOW_TEAM_TAB);
  }
}
