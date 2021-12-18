export const TITLE = '우테코 크루와 팀 매칭 관리 보드';

export const MAIN_MENU = [
  { id: 'crew-tab', text: '크루 관리' },
  { id: 'team-tab', text: '팀 매칭 관리' },
];

export const APP = 'app';

export const COURSE_RADIO = [
  { id: 'frontend-course', value: 'frontend', text: '프론트엔드' },
  { id: 'backend-course', value: 'backend', text: '백엔드' },
];

export const COURSE = 'course';

export const RADIO = 'radio';

export const SELECT_COURSE = '크루를 관리할 코스를 선택해주세요';

export const MAIN = 'main';

export const ADD_CREW_FORM_TITLE = {
  frontend: '프론트엔드 크루 관리',
  backend: '백엔드 크루 관리',
};

export const CREW_NAME = '크루 이름';

export const CONFIRM = '확인';

export const CREW_MANAGE_DOM_SELECTOR = {
  crewNameInput: 'crew-name-input',
  addCrewButton: 'add-crew-button',
};

export const ERROR_MESSAGE = {
  invalidName: '이름을 확인해주세요',
};

export const CREW_TABLE = ['', '크루', '관리'];

export const DELETE_BUTTON = { className: 'delete-crew-button', text: '삭제' };

export const CREW_LIST_TITLE = '크루 목록';

export const SELECT_COURSE_OPTION = [
  { value: 'frontend', text: '프론트엔드' },
  { value: 'backend', text: '백엔드' },
];

export const SELECT_MISSION_OPTION = [
  { value: 'baseball', text: '숫자야구게임' },
  { value: 'racingcar', text: '자동차경주' },
  { value: 'lotto', text: '로또' },
  { value: 'shopping-cart', text: '장바구니' },
  { value: 'payments', text: '결제' },
  { value: 'subway', text: '지하철노선도' },
  { value: 'performance', text: '성능개선' },
  { value: 'deploy', text: '배포' },
];

export const TEAM_MISSION_DOM_SELECTOR = {
  courseSelect: 'course-select',
  missionSelect: 'mission-select',
  showTeamMatcherButton: 'show-team-matcher-button',
  teamMemberCountInput: 'team-member-count-input',
  matchTeamButton: 'match-team-button',
};

export const SELECTED_COURSE_TITLE = {
  frontend: '프론트엔드',
  backend: '백엔드',
};

export const SELECT_COURSE_MISSION_TITLE = '팀 매칭을 관리할 코스, 미션을 선택하세요.';

export const TEAM_MATCHING_TITLE = '미션의 팀 매칭';

export const PERSON_COUNT_PER_TEAM = '1팀당 인원 수';

export const TEAM_MATCHING = '팀 매칭';

export const TEAM_MATCHING_SUBTITLE = '아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?';
