export const CONSTANTS = Object.freeze({
  STORAGE_KEY_CREW: 'TEAM_MATCHING_CREW_LIST',
});

export const ERROR = Object.freeze({
  CREW_NAME_EMPTY: Symbol('크루 이름 입력란이 비어있습니다.'),
  CREW_NAME_LENGTH: Symbol('크루의 이름은 1자에서 5자까지 입력할 수 있습니다.'),
  CREW_NAME_UNIQUE: Symbol('크루 이름은 중복될 수 없습니다.'),
});

export const DONE = Object.freeze({
  CREW_NAME_VAILD: Symbol('크루 이름 검증 성공'),
});
