export const FRONT_END = '프론트엔드';
export const BACK_END = '백엔드';
export const FRONT_END_COURSE = 'frontend-course';
export const BACK_END_COURSE = 'backend-course';

export const SELECTOR = Object.freeze({
  teamMatchingAppId: 'app',
  // 탭
  crewTabButtonId: 'crew-tab',
  teamTabButtonId: 'team-tab',
  tabContentMain: 'tab-content-main',

  // 크루 관리 탭
  courseSelectContainer: 'course-select-container',
  frontendCourseRadioInputId: FRONT_END_COURSE,
  backendCourseRadioInputId: BACK_END_COURSE,

  crewManageFormContainer: 'crew-manage-container',
  crewNameInputId: 'crew-name-input',
  addCrewButttonId: 'add-crew-buttton',
  deleteCrewButttonId: 'delete-crew-buttton',

  crewTableContainer: 'crew-table-container',
  crewTableId: 'crew-table',

  // 팀 매칭 관리 탭
  courseSelectId: 'course-select',
  missionSelectId: 'mission-select',

  showTeamMatcherButtonId: 'show-team-matcher-button',
  teamMemberCountInputId: 'team-member-count-input',
  matchTeamButtonId: 'match-team-button',
  teamMatchResultUlId: 'team-match-result',
  rematchTeamButton: 'rematch-team-button',
});

export const STORAGE_KEY = Object.freeze({
  currentTab: 'current-tab',

  // 크루 관리
  crewCourse: 'crew-course',
  crewFrontEndMember: 'crew-front-end-member',
  crewBackEndMember: 'crew-back-end-member',
});

export const MESSAGE = Object.freeze({
  // 크루 이름 관련
  crewNameIsRequired: '크루 이름을 입력해주세요.',
  crewNameHaveToUnique: '존재하는 크루 이름입니다.',
  crewNameHaveToUnderFiveLetter: '크루 이름은 5글자까지 가능합니다.',
});
