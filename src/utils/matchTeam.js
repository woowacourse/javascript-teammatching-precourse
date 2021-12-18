const firstMatch = (randomCrewArray, teamCount) => {
  const teams = [];

  while (teamCount <= randomCrewArray.length) {
    const newTeam = [];
    for (let i = 0; i < teamCount; i += 1) {
      newTeam.push(randomCrewArray.shift());
    }
    teams.push(newTeam);
  }

  return { teams, remainedCrews: randomCrewArray };
};

const extraMatch = (teams, remainedCrews) => {
  let idx = 0;

  while (remainedCrews.length) {
    if (idx === teams.length) idx = 0;
    teams[idx].push(remainedCrews.shift());
    idx += 1;
  }

  return { finalTeams: teams };
};

export const matchTeam = (crews, teamCount) => {
  const rangeArray = Array.from({ length: crews.length }, (v, i) => i);
  // eslint-disable-next-line no-undef
  const randomCrewArray = MissionUtils.Random.shuffle(rangeArray);

  const { teams, remainedCrews } = firstMatch(randomCrewArray, teamCount);

  if (remainedCrews.length > 0) {
    const { finalTeams } = extraMatch(teams, remainedCrews);
    return finalTeams;
  }

  return teams;
};
