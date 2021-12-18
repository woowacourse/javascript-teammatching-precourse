export const ERROR_MESSAGE = Object.freeze({
  DUPLICATED_NAME: '이미 해당 크루는 등록되어 있습니다.',
  OUT_OF_RANGE: '이름은 최대 5글자까지 작성가능합니다.',
  EMPTY: '값을 입력해주세요.'
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
