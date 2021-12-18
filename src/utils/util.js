const matchSamePeopleTeam = (crews, headCount, shuffledCrewIndexList) => {
  const teamList = [];
  let count = 0;
  let team = [];

  while (shuffledCrewIndexList.length > 0) {
    team.push(crews[shuffledCrewIndexList.shift()]);
    count = count + 1;
    if (count === headCount) {
      teamList.push(team);
      count = 0;
      team = [];
    }
  }
  return [teamList, team];
};

const matchRemainder = (teamList, remainder) => {
  if (remainder.length > 0) {
    teamList.forEach((list) => {
      if (remainder.length > 0) list.push(remainder.shift());
    });
  }
};
export const matchRandomTeam = (crews, headCount) => {
  headCount = Number.parseInt(headCount, 10);
  const indexList = [];
  crews.forEach((_, index) => {
    indexList.push(index);
  });
  // eslint-disable-next-line no-undef
  const shuffledCrewIndexList = MissionUtils.Random.shuffle(indexList);
  const [teamList, remainder] = matchSamePeopleTeam(crews, headCount, shuffledCrewIndexList);

  matchRemainder(teamList, remainder);
  return teamList;
};
