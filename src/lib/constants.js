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

  /** 팀매칭 */
  SHOW_TEAM_MATCHER_FORM_ID: 'show-team-matcher-form',
  COURSE_SELECT_ID: 'course-select',
  MISSION_SELECT_ID: 'mission-select',
  SHOW_TEAM_MATCHER_BUTTON_ID: 'show-team-matcher-button',

  TEAM_MEMBER_COUNT_FORM_ID: 'team-member-count-form',
  TEAM_MEMBER_COUNT_INPUT_ID: 'team-member-count-input',
  MATCH_TEAM_BUTTON: 'match-team-button',
  TEAM_MATCH_RESULT: 'team-match-result',
  REMATCH_TEAM_BUTTON: 'rematch-team-button',

  CREW_TEAM_MACHING_SECTION: 'crew-team-matching-section',
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
  TEAM: 'team',
};

export const COURSE = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
};

export const ERROR_MESSAGE = Object.freeze({
  IS_DUPLICATED_NAME: '이름이 중복되었습니다.',
  IS_NONE_INPUT: '글자가 입력되지 않았습니다',
  IS_STRING_GREATHER_THAN_5: '글자수는 5글자 이하입니다.',

  IS_COUNT_NEGATIVE_NUMBER: '음수일 수 없습니다',
  IS_COUNT_ZERO: '0일 수 없습니다.',
});
export const COURSE_SELECT_MAP = Object.freeze({
  프론트엔드: 'frontend',
  백엔드: 'backend',
});
export const MISSION_SELECT_MAP = Object.freeze({
  베이스볼: 'baseball',
  레이싱카: 'racingcar',
  로또: 'lotto',
  장바구니: 'shopping-cart',
  결제: 'payments',
  지하철노선도: 'subway',
  퍼포먼스: 'performance',
  배포: 'deploy',
});
export const COURSE_SELECT_MAP_REVERSE = Object.freeze({
  frontend: '프론트엔드',
  backend: '백엔드',
});
export const MISSION_SELECT_MAP_REVESE = Object.freeze({
  baseball: '베이스볼',
  racingcar: '레이싱카',
  lotto: '로또',
  shoppingCart: '장바구니',
  payments: '결제',
  subway: '지하철노선도',
  performance: '퍼포먼스',
  deploy: '배포',
});
