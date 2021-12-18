export const EVENT_TYPE = {
  SUBMIT: 'submit',
  CLICK: 'click',
};

export const MENU_ID = {
  'crew-tab': 'CREW_MANAGE',
  'team-tab': 'TEAM_MANAGE',
};

export const MENU = {
  CREW_MANAGE: 'CREW_MANAGE',
  TEAM_MANAGE: 'TEAM_MANAGE',
};

export const COURSE = {
  frontend: 'frontend',
  backend: 'backend',
};

export const COURSE_NAME = {
  [COURSE.frontend]: '프론트엔드',
  [COURSE.backend]: '백엔드',
};

export const MISSION = {
  BASEBALL: 'baseball',
  RACINGCAR: 'racingcar',
  LOTTO: 'lotto',
  SHOPPING_CART: 'shopping-cart',
  PAYMENTS: 'payments',
  SUBWAY: 'subway',
  PERFORMANCE: 'performance',
  DEPLOY: 'deploy',
};

export const MISSION_NAME = {
  [MISSION.BASEBALL]: '숫자야구게임',
  [MISSION.RACINGCAR]: '자동차경주',
  [MISSION.LOTTO]: '로또',
  [MISSION.SHOPPING_CART]: '장바구니',
  [MISSION.PAYMENTS]: '결제',
  [MISSION.SUBWAY]: '지하철노선도',
  [MISSION.PERFORMANCE]: '성능개선',
  [MISSION.DEPLOY]: '배포',
};

export const REDCUER_RESULT = {
  SUCCESS: data => {
    return { SUCCESS: true, data, error: null };
  },
  FAIL: error => {
    return { SUCCESS: false, error };
  },
};

export const CREW_NAME_RULE = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 5,
};

export const ERROR_MESSAGES = {
  EXISTED_NAME: '이미 존재하는 이름입니다! 다른 이름을 선택해주세요!',
  NAME_LENGTH: `이름은 최소 ${CREW_NAME_RULE.MIN_LENGTH}글자, 최대 ${CREW_NAME_RULE.MAX_LENGTH}까지만 가능합니다.`,
  TEAM_HEADCOUNT: '팀 당 인원수는 0보다 커야하고, 크루 수보다 작아야합니다.',
};
