export const CREW_ACTION_TYPE = {
  ADD_CREW: 'ADD_CREW',
  REMOVE_CREW: 'REMOVE_CREW',
};

export const addCrewAction = data => {
  return { type: CREW_ACTION_TYPE.ADD_CREW, data };
};

export const removeCrewAction = data => {
  return { type: CREW_ACTION_TYPE.REMOVE_CREW, data };
};
