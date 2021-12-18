export const ERROR_MESSAGE = {};

export const STYLE_DISPLAY = {
  BLOCK: 'block',
  INLINE_BLOCK: 'inline-block',
  NONE: 'none',
};

export const EVENT_LISTENER_TYPE = {
  CLICK: 'click',
  DOM_CONTENT_LOADED: 'DOMContentLoaded',
};

export const CUSTOM_EVENT_NAME = {
  SHOW_CREW_TAB: '@showCrewTab',
  SHOW_TEAM_TAB: '@showTeamTab',
  ADD_CREW: '@addCrew',
  DELETE_CREW: '@deleteCrew',
};

export const LOCAL_STORAGE_KEY = {
  CREW_LIST: 'crewList',
}

export const CREW_COURSE = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
}

export const SELECTOR = {
  APP: 'app',

  CREW_TAB: 'crew-tab',
  TEAM_TAB: 'team-tab',

  FRONTEND_COURSE: 'frontend-course',
  BACKEND_COURSE: 'backend-course',

  CREW_NAME_INPUT: 'crew-name-input',
  ADD_CREW_BUTTTON: 'add-crew-buttton',
  DELETE_CREW_BUTTTON: 'delete-crew-buttton',

  CREW_TABLE: 'crew-table',

  COURSE_SELECT: 'course-select',
  MISSION_SELECT: 'mission-select',
  SHOW_TEAM_MATCHER_BUTTON: 'show-team-matcher-button',
  TEAM_MEMBER_COUNT_INPUT: 'team-member-count-input',
  MATCH_TEAM_BUTTON: 'match-team-button',
  TEAM_MATCH_RESULT: 'team-match-result',
  REMATCH_TEAM_BUTTON: 'rematch-team-button',

  // custom selectors
  TAB_BUTTONS: 'tab-buttons',
  CREW_MANAGEMENT_VIEW: 'crew-management-view',
  TEAM_MANAGEMENT_VIEW: 'team-management-view',
  FRONTEND_SECTION_VIEW: 'frontend-section-view',
  BACKEND_SECTION_VIEW: 'backend-section-view',
};

export const TAB_TYPE = {
  CREW_MANAGEMENT: SELECTOR.CREW_TAB,
  TEAM_MANAGEMENT: SELECTOR.TEAM_TAB,
};

export const TAB_LABEL = {
  [TAB_TYPE.CREW_MANAGEMENT]: '크루 관리',
  [TAB_TYPE.TEAM_MANAGEMENT]: '팀 관리',
};
