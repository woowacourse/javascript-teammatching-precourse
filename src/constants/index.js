export const FRONTEND = 'frontend';
export const BACKEND = 'backend';
export const FRONTEND_KR = '프론트엔드';
export const BACKEND_KR = '백엔드';
export const FRONTEND_COURSE = 'frontend-course';
export const BACKEND_COURSE = 'backend-course';
export const LOCAL_STORAGE_KEY = 'team-matching-board-data';

export const ELEMENT_SELECTOR = Object.freeze({
  IDS: {
    APP: 'app',
    TAB_MENU: 'tab-menu',
    TAB_CONTENT: 'tab-content',
    CREW_MANAGE: {
      MENU: 'crew-tab',
      PANE: 'crew-tab-pane',
      COURSE_SELECT: 'course-select',
      FRONTEND_COURSE_RADIO: FRONTEND_COURSE,
      BACKEND_COURSE_RADIO: BACKEND_COURSE,
      ADD_CREW: 'add-crew',
      ADD_CREW_INPUT: 'crew-name-input',
      ADD_CREW_BUTTON: 'add-crew-buttton',
      CREW_LIST_TABLE: 'crew-table',
    },
    TEAM_MATCHING: {
      MENU: 'team-tab',
      PANE: 'team-tab-pane',
    },
  },
  CLASSES: {
    CREW_MANAGE: {
      DELETE_CREW_BUTTON: 'delete-crew-buttton',
    },
  },
});

export const VALIDATION_MESSAGES = {
  CREW_MANAGE: {
    NAME: '이름은 1글자에서 5글자까지만 입력해 주시기 바랍니다',
    DUPLICATED: '같은 코스에 중복된 이름이 있습니다',
  },
};

export const ELEMENT_DATA_ATTRIBUTES = Object.freeze({
  CREW_MANAGE: {
    CREW_NAME: 'data-crew-name',
    CREW_COURSE: 'data-crew-course',
  },
});

export const REMOVE_CREW_CONFIRM_MESSAGE = (name, course) => {
  return `정말 ${name}을(를) ${course} 크루 목록 에서 삭제하시겠습니까?`;
};
