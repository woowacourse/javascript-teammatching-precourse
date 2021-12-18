export const SELECTOR = Object.freeze({
  teamMatchingAppId: 'app',
  // 탭
  crewTabButtonId: 'crew-tab',
  teamTabButtonId: 'team-tab',
  tabContentMain: 'tab-content-main',

  // 크루 관리 탭
  courseSelectContainer: 'course-select-container',
  frontendCourseRadioInputId: 'frontend-course',
  backendCourseRadioInputId: 'backend-course',

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
});

export const FRONT_END = '프론트엔드';
export const BACK_END = '백엔드';
