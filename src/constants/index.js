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
};

export const MESSAGE = {
  DELETE_CONFIRM: '정말 삭제하시겠습니까?',
};

export const LOCAL_DB = {
  CREW_FRONT: 'CREW_FRONT',
  CREW_BACK: 'CREW_BACK',
};
