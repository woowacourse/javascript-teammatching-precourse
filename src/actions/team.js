export const TEAM_ACTION_TYPE = {
  MATCH_TEAM: 'MATCH_TEAM',
  UNMATCH_TEAM: 'UNMATCH_TEAM',
};

export const matchTeamAction = data => {
  return { type: TEAM_ACTION_TYPE.MATCH_TEAM, data };
};

export const unmatchTeamAction = data => {
  return { type: TEAM_ACTION_TYPE.UNMATCH_TEAM, data };
};
