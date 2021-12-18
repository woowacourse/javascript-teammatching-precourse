export const APP_TITLE = '우테코 크루와 팀 매칭 관리 보드';
export const APP_MENU = Object.freeze([
  { id: 'crew-tab', text: '크루 관리' },
  { id: 'team-tab', text: '팀 매칭 관리' },
]);
export const TEAM_MISSION = Object.freeze([
  { id: 'baseball', text: '숫자야구게임' },
  { id: 'racingcar', text: '자동차경주' },
  { id: 'lotto', text: '로또' },
  { id: 'shopping-cart', text: '장바구니' },
  { id: 'payments', text: '결제' },
  { id: 'subway', text: '지하철노선도' },
  { id: 'performance', text: '성능개선' },
  { id: 'deploy', text: '배포' },
]);

export const EMPTY = '';
export const BLANK = ' ';

export const ERROR_MESSAGES = Object.freeze({
  notDefined: '을(를) 입력해 주세요.',
  dupError: '은(는) 이미 존재합니다.',
  lengthOverError: '은(는) 5자 이하여야 합니다.',
});

export const EVENT_TYPE_CLICK = 'click';

export const RADIO_TAB = 'radioTab';
export const CURRENT_TAB = 'currentTab';

export const DOM = Object.freeze({
  CREW_TAB: 'crew-tab',
  TEAM_TAB: 'team-tab',
  FRONTEND_COURSE: 'frontend-course',
  BACKEND_COURSE: 'backend-course',
  CREW_NAME_INPUT: 'crew-name-input',
  ADD_CREW_BUTTON: 'add-crew-buttton',
  DELETE_CREW_BUTTON: 'delete-crew-buttton',
  COURSE_SELECT: 'course-select',
  MISSION_SELECT: 'mission-select',
  SHOW_TEAM_MATCHER_BUTTON: 'show-team-matcher-button',
  TEAM_MEMBER_COUNT_INPUT: 'team-member-count-input',
  MATCH_TEAM_BUTTON: 'match-team-button',
  TEAM_MATCH_RESULT: 'team-match-result',
  REMATCH_TEAM_BUTTON: 'rematch-team-button',
});
