export const ERROR_MESSAGE = Object.freeze({
  DUPLICATED_NAME: '이미 해당 크루는 등록되어 있습니다.',
  OUT_OF_RANGE: '이름은 최대 5글자까지 작성가능합니다.',
  EMPTY: '값을 입력해주세요.',
  NOT_FOUND: '크루 목록이 비었습니다. 먼저 크루를 추가해주세요.',
  NOT_POSITIVE_INTEGER: '양수인 정수만 입력해주세요.',
  NOT_VALID_HEADCOUNT: '1팀당 인원 수에 입력한 값보다 더 적은 수의 크루들로 구성된 팀은 없어야 합니다.'
});

export const STORAGE_KEY = Object.freeze({
  CREW: 'crew',
  TEAM: 'team'
});

export const COURSE_SELECT_OPTIONS = [
  { name: '프론트엔드', value: 'frontend' },
  { name: '백엔드', value: 'backend' }
];

export const MISSION_SELECT_OPTIONS = [
  { name: '숫자야구게임', value: 'baseball' },
  { name: '자동차경주', value: 'racingcar' },
  { name: '로또', value: 'lotto' },
  { name: '장바구니', value: 'shopping-cart' },
  { name: '결제', value: 'payments' },
  { name: '지하철노선도', value: 'subway' },
  { name: '성능개선', value: 'performance' },
  { name: '배포', value: 'deploy' }
];

export const COURSE_KOR = Object.freeze({
  frontend: '프론트엔드',
  backend: '백엔드'
});

export const MISSION_KOR = Object.freeze({
  baseball: '숫자야구게임',
  racingcar: '자동차경주',
  lotto: '로또',
  'shopping-cart': '장바구니',
  payments: '결제',
  subway: '지하철노선도',
  performance: '성능개선',
  deploy: '배포'
});
