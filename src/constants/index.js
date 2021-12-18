export const ID = {
  // menu
  TAB_CONTAINER: 'tab-container',
  CREW_TAB: 'crew-tab',
  TEAM_TAB: 'team-tab',
  // section
  SELECT_SECTION: 'select-section',
  MANAGE_SECITON: 'manage-section',
  RESULT_SECTION: 'result-section',
  // crew
  COURSE_SELECT_CONTAINER: 'course-select-container',
  FRONTEND_COURSE: 'frontend-course',
  BACKEND_COURSE: 'backend-course',
  CREW_NAME_INPUT: 'crew-name-input',
  ADD_CREW_BUTTON: 'add-crew-buttton',
  CREW_TABLE: 'crew-table',
  // team
  COURSE_SELECT: 'course-select',
  MISSION_SELECT: 'mission-select',
  SHOW_TEAM_MATCHER_BUTTON: 'show-team-matcher-button',
  TEAM_MEMBER_COUNT_INPUT: 'team-member-count-input',
  MATCH_TEAM_BUTTON: 'match-team-button',
  TEAM_MATCH_RESULT: 'team-match-result',
  REMATCH_TEAM_BUTTON: 'rematch-team-button',
  TEAM_CREW_LISTS: 'team-crew-lists',
};

export const CLASS = {
  DELETE_CREW_BUTTON: 'delete-crew-buttton',
};

export const NUM = {
  MAX_CREW_NAME: 5,
};

export const ERROR = {
  CREW_NAME_IS_LONG: `크루 이름은 ${NUM.MAX_CREW_NAME}자가 초과되지 않도록 입력해주세요.`,
  CREW_IS_DUPLICATED: '같은 이름을 가진 우테코 크루가 존재합니다.',
  COUNT_IS_WRONG: '팀을 구성할 수 없는 숫자입니다.',
  CREW_NAME_IS_BLANK: '이름은 빈값이 될 수 없습니다.',
};

export const MESSAGE = {
  DELETE_CONFIRM: '정말 삭제하시겠습니까?',
};

export const LOCAL_DB = {
  CREW_FRONT: 'CREW_FRONT',
  CREW_BACK: 'CREW_BACK',
};

export const COURSE_NAME = {
  frontend: '프론트엔드',
  backend: '백엔드',
};

export const MISSION_NAME = {
  baseball: '숫자야구게임',
  racingcar: '자동차경주',
  lotto: '로또',
  'shopping-cart': '장바구니',
  payments: '결제',
  subway: '지하철노선도',
  performance: '성능개선',
  deploy: '배포',
};
