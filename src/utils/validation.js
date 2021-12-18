import { CREW_NAME_RULE } from './constants.js';

export const isValidCrewName = name => {
  const { length } = name;
  return (
    length <= CREW_NAME_RULE.MAX_LENGTH && length >= CREW_NAME_RULE.MIN_LENGTH
  );
};
