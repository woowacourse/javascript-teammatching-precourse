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
  matchTeamButton: 'match-team-button',
  matchResult: 'team-match-result',
  rematchButton: 'rematch-team-button',
};

export const WORDS = {};

export const ALERT_MESSAGE = {
  BLANK_EXIST: '공백이거나 공백이 포함될 수 없습니다.',
  DUPLICATED_NAME: '이미 같은 이름의 크루명이 존재합니다.',
  CREW_NAME_NOT_INLENGTH: '크루명은 5자까지 허용됩니다.',
};

export const LOCALSTORAGE_KEY = {
  course: 'course',
};

export const COURSE_OPTIONS = ['프론트엔드', '백엔드'];

export const MISSION_OPTIONS = [
  '숫자야구게임(baseball)',
  '자동차경주(racingcar)',
  '로또(lotto)',
  '장바구니(shopping-cart)',
  '결제(payments)',
  '지하철노선도(subway)',
  '성능개선(performance)',
  '배포(deploy)',
];
