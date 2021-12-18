export const MIN_CREW_NAME = 1;
export const MAX_CREW_NAME = 5;

export const ERROR_MESSAGE = {
  CREW_NAME: {
    SPACE: '크루 이름의 앞뒤로 공백이 올 수 없습니다.',
    MIN_LENGTH: `크루 이름은 ${MIN_CREW_NAME}자 이상이어야합니다.`,
    MAX_LENGTH: `크루 이름은 ${MAX_CREW_NAME}자 이하여야합니다.`,
    DUPLICATED: '이미 존재하는 이름입니다.',
  },
  MEMBER_COUNT: {
    POSITIVE_INTEGER: '한 팀의 인원 수는 양의 정수여야합니다.',
    MAX_COUNT: '한 팀의 인원 수는 코스의 전체 크루원 수보다 클 수 없습니다.',
  },
};
