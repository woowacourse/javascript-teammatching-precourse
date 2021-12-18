export const PLAIN_TEXT = '';
export const DOM = Object.freeze({
  APP_ID: 'app',

  TAB_LIST_ID: 'tab-list',
  CREW_TAB_ID: 'crew-tab',
  TEAM_TAB_ID: 'team-tab',

  MAIN_SECTION: 'main-section',

  COURSE_RADIO_NAME: 'course-radio-name',
  RADIO_FRONTEND_ID: 'frontend-course',
  RADIO_BACKEND_ID: 'backend-course',

  CREW_NAME_INPUT_ID: 'crew-name-input',
  ADD_CREW_BUTTON_ID: 'add-crew-buttton',
  DELETE_CREW_BUTTON_CLASSNAME: 'delete-crew-buttton',

  CREW_TABLE_ID: 'crew-table',
  CREW_TABLE_BODY: 'crew-table-body',

  COURSE_SELECT_SECTION_ID: 'course-select-section',
  CREW_INPUT_FORM_ID: 'crew-input-form',
  CREW_LIST_ID: 'crew-list',

  CREW_FORM_SECTION: 'crew-form-section',
  CREW_LIST_SECTION: 'crew-list-section',
});

export const TAB = {
  DEFAULT: '기본 상태',
  CREW: '크루 관리',
  TEAM: '팀 매칭 관리',
};

export const MODEL_KEYS = {
  GLOBAL: 'global',
  INPUTS: 'inputs',
  CREW: 'crew',
};

export const COURSE = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
};

export const ERROR_MESSAGE = Object.freeze({
  IS_DUPLICATED_NAME: '이름이 중복되었습니다.',
  IS_NONE_INPUT: '글자가 입력되지 않았습니다',
  IS_STRING_GREATHER_THAN_5: '글자수는 5글자 이하입니다.',
});
