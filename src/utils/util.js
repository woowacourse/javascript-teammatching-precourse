export const matchRandomTeam = (crews, headCount) => {
  const indexList = [];
  crews.forEach((_, index) => {
    indexList.push(index);
  });
  // eslint-disable-next-line no-undef
  const shuffledCrewIndexList = MissionUtils.Random.shuffle(indexList);
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

  if (team.length > 0) {
    teamList.forEach((list) => {
      if (team.length > 0) list.push(team.shift());
    });
  }
  return teamList;
};
