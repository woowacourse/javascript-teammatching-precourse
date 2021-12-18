import { CREW_NAME_RULE } from './constants.js';

export const isValidCrewName = name => {
  const { length } = name;
  return (
    length <= CREW_NAME_RULE.MAX_LENGTH && length >= CREW_NAME_RULE.MIN_LENGTH
  );
};

export const isConfirmedRemove = name =>
  window.confirm(`${name} 크루를 삭제하시겠습니까?`);

export const isValidHeadCount = (headCount, crewCount) =>
  headCount > 0 && headCount <= crewCount;
