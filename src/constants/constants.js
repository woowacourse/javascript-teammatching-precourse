export const SELECTOR = {
  app: 'app',
  container: 'container',

  crewManageButton: 'crew-tab',
  teamManageButton: 'team-tab',
  radioName: 'course',
  selectedCourseContents: 'crew-selected-course-contents',

  radioFrontendInput: 'frontend-course',
  radioBackendInput: 'backend-course',
  crewNameInput: 'crew-name-input',
  crewAddButton: 'add-crew-button',
  crewDeleteButton: 'delete-crew-button',
  crewTable: 'crew-table',

  courseSelect: 'course-select',
  missionSelect: 'mission-select',
  teamMatcherButton: 'show-team-matcher-button',
  memberCountInput: 'team-member-count-input',
  teamMatchCrewList: 'team-match-crew-list',
  matchTeamButton: 'match-team-button',
  matchResult: 'team-match-result',
  rematchButton: 'rematch-team-button',
  teamCourseAndMissionContents: 'team-course-mission-contents',
};

export const WORDS = {};

export const ALERT_MESSAGE = {
  BLANK_EXIST: '공백이거나 공백이 포함될 수 없습니다.',
  DUPLICATED_NAME: '이미 같은 이름의 크루명이 존재합니다.',
  CREW_NAME_NOT_INLENGTH: '크루명은 5자까지 허용됩니다.',
  NOT_POSITIVE: '1이상의 양수를 작성해주세요.',
};

export const LOCALSTORAGE_KEY = {
  course: 'course',
};

export const COURSE_OPTIONS = [
  { name: '프론트엔드', value: 'frontend' },
  { name: '백엔드', value: 'backend' },
];

export const MISSION_OPTIONS = [
  { name: '숫자야구게임', value: 'baseball' },
  { name: '자동차경주', value: 'racingcar' },
  { name: '로또', value: 'lotto' },
  { name: '장바구니', value: 'shopping-cart' },
  { name: '결제', value: 'payments' },
  { name: '지하철노선도', value: 'subway' },
  { name: '성능개선', value: 'performance' },
  { name: '배포', value: 'deploy' },
];

export const KEY_VALUE = {
  frontend: '프론트엔드',
  backend: '백엔드',
  baseball: '숫자야구게임',
  racingcar: '자동차경주',
  lotto: '로또',
  'shopping-cart': '장바구니',
  payments: '결제',
  subway: '지하철노선도',
  performance: '성능개선',
  deploy: '배포',
};
